import CheckboxTreeError from './CheckboxTreeError';
import { CHECK_MODEL } from './constants';

class NodeModel {
    constructor(props, nodes = {}) {
        this.props = props;
        this.flatNodes = nodes;
    }

    setProps(props) {
        this.props = props;
    }

    clone() {
        const clonedNodes = {};

        // Re-construct nodes one level deep to avoid shallow copy of mutable characteristics
        Object.keys(this.flatNodes).forEach((value) => {
            const node = this.flatNodes[value];
            clonedNodes[value] = { ...node };
        });

        return new NodeModel(this.props, clonedNodes);
    }

    getNode(value) {
        return this.flatNodes[value];
    }

    reset() {
        this.flatNodes = {};
    }

    flattenNodes(nodes, parent = {}, depth = 0) {
        if (!Array.isArray(nodes) || nodes.length === 0) {
            return;
        }

        const { disabled, noCascade } = this.props;

        // Flatten the `node` property for internal lookups
        nodes.forEach((node, index) => {
            const isParent = this.nodeHasChildren(node);

            // Protect against duplicate node values
            if (this.flatNodes[node.value] !== undefined) {
                throw new CheckboxTreeError(
                    `Duplicate value '${node.value}' detected. All node values must be unique.`,
                );
            }

            this.flatNodes[node.value] = {
                label: node.label,
                value: node.value,
                children: node.children,
                parent,
                isChild: parent.value !== undefined,
                isParent,
                isLeaf: !isParent,
                showCheckbox: node.showCheckbox !== undefined ? node.showCheckbox : true,
                disabled: this.getDisabledState(node, parent, disabled, noCascade),
                treeDepth: depth,
                index,
            };
            this.flattenNodes(node.children, node, depth + 1);
        });
    }

    nodeHasChildren(node) {
        return Array.isArray(node.children);
    }

    getDisabledState(node, parent, disabledProp, noCascade) {
        if (disabledProp) {
            return true;
        }

        if (!noCascade && parent.disabled) {
            return true;
        }

        return Boolean(node.disabled);
    }

    deserializeLists(lists) {
        const listKeys = ['checked', 'expanded', 'loading'];
        console.log(this.flatNodes)
        // Reset values to false
        Object.keys(this.flatNodes).forEach((value) => {
            listKeys.forEach((listKey) => {
                this.flatNodes[value][listKey] = false;
            });
        });

        // Deserialize values and set their nodes to true
        listKeys.forEach((listKey) => {
            lists[listKey].forEach((value) => {
                if (this.flatNodes[value] !== undefined) {
                    let flag = true
                    if (Object.is(listKey, 'loading') && this.flatNodes[value]?.children?.length) {
                        flag = false
                    } else {
                        flag = true
                    }
                    this.flatNodes[value][listKey] = flag;
                }
            });
        });
        
    }

    serializeList(key) {
        const list = [];

        Object.keys(this.flatNodes).forEach((value) => {
            if (this.flatNodes[value][key]) {
                list.push(value);
            }
        });

        return list;
    }

    expandAllNodes(expand) {
        Object.keys(this.flatNodes).forEach((value) => {
            if (this.flatNodes[value].isParent) {
                this.flatNodes[value].expanded = expand;
            }
        });

        return this;
    }

    toggleChecked(node, isChecked, checkModel, noCascade, percolateUpward = true) {
        const flatNode = this.flatNodes[node.value];
        const modelHasParents = [CHECK_MODEL.PARENT, CHECK_MODEL.ALL].indexOf(checkModel) > -1;
        const modelHasLeaves = [CHECK_MODEL.LEAF, CHECK_MODEL.ALL].indexOf(checkModel) > -1;

        if (flatNode.isLeaf || noCascade) {
            if (node.disabled) {
                return this;
            }

            this.toggleNode(node.value, 'checked', isChecked);
        } else {
            // Toggle parent check status if the model tracks this OR if it is an empty parent
            if (modelHasParents || flatNode.children.length === 0) {
                this.toggleNode(node.value, 'checked', isChecked);
            }

            if (modelHasLeaves) {
                // Percolate check status down to all children
                flatNode.children.forEach((child) => {
                    this.toggleChecked(child, isChecked, checkModel, noCascade, false);
                });
            }
        }

        // Percolate check status up to parent
        // The check model must include parent nodes and we must not have already covered the
        // parent (relevant only when percolating through children)
        if (percolateUpward && !noCascade && flatNode.isChild && modelHasParents) {
            this.toggleParentStatus(flatNode.parent, checkModel);
        }

        return this;
    }

    toggleParentStatus(node, checkModel) {
        const flatNode = this.flatNodes[node.value];

        if (flatNode.isChild) {
            if (checkModel === CHECK_MODEL.ALL) {
                this.toggleNode(node.value, 'checked', this.isEveryChildChecked(flatNode));
            }

            this.toggleParentStatus(flatNode.parent, checkModel);
        } else {
            this.toggleNode(node.value, 'checked', this.isEveryChildChecked(flatNode));
        }
    }

    isEveryChildChecked(node) {
        return node.children.every((child) => this.getNode(child.value).checked);
    }

    toggleNode(nodeValue, key, toggleValue) {
        this.flatNodes[nodeValue][key] = toggleValue;

        return this;
    }
}

export default NodeModel;

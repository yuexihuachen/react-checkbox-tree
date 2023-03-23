import React, { useState } from 'react';
import CheckboxTree from 'react-checkbox-tree';
import { fileSystem as allnodes } from './common';

function BasicExample() {

    const [nodes, setNodes] = useState(allnodes)

    const [checked, setChecked] = useState([
        '/app/Http/Controllers/WelcomeController.js',
        '/app/Http/routes.js',
        '/public/assets/style.css',
        '/public/index.html',
        '/.gitignore',
    ]);
    const [expanded, setExpanded] = useState(['/app']);
   
    const onodes = [{"value":"whoc1bkyexo","label":"0eqmgmy4btpj"},{"value":"poo4ojoj8t","label":"h35u5sdcacd"},{"value":"8ebaw3zv3wa","label":"invngk6d9nh"},{"value":"gpapow2pex","label":"yi8z8iu412p"},{"value":"alt3nni08s","label":"fgvdre0ebkk"},{"value":"a48lhsm2v6e","label":"p0f1aczavch"},{"value":"lmtu4g908sd","label":"ubtw5q9thf"},{"value":"8l81ho0bgbw","label":"ycvazp2p3lb"},{"value":"9fbnb1pe2oi","label":"8fgihfdq1v3"},{"value":"elu0umnvef6","label":"4xfl9aqfrrj"},{"value":"a6wlq5aqly9","label":"w5hw23ut6gq"},{"value":"9wvo1llu5r7","label":"ofc6ysg89e"},{"value":"nomv69cu2gi","label":"v0sy17y8mu9"},{"value":"rk8tqhsdi5","label":"js1tjft7o8"},{"value":"6l1dk80d513","label":"qn7sxshwq4p"},{"value":"ctycep4genc","label":"jzjnv1p4k4n"},{"value":"2tfnf5sn21p","label":"n0ztlzoxch"},{"value":"leocr9buuki","label":"yhqs955umrr"},{"value":"8b2tn00ytu8","label":"45h92ac69nd"},{"value":"e1buwpcvffd","label":"578trt3jp28"},{"value":"6ogck5xw8h","label":"w72ynf5k2z"},{"value":"u7zdyic03k","label":"n6q729sb3q"},{"value":"bz1lat108zo","label":"b9nfoeranvo"},{"value":"949l39iu3r5","label":"kwmbmnwn6p"},{"value":"emusgsnlbps","label":"tkhadbq93e"},{"value":"ny54eux1qbe","label":"t4d4d7vkn1l"},{"value":"nfpyueh532m","label":"ottnp3smph"},{"value":"gto7szh8bnc","label":"9zmdda6at8w"},{"value":"rvulqytj26l","label":"p9szj05edrc"},{"value":"qagufv9ur3","label":"1uhmzrthsdm"}]
    const onodes1 = [{"value":"nri44yequg","label":"5azenzmeew3"},{"value":"4ccqgmud7bv","label":"btlal3mf9c"},{"value":"3a3r3xx1an","label":"rkv37am48x"},{"value":"xpy2b1sfz6","label":"j3uyecqkb3"},{"value":"ec4f8q1jcwe","label":"6qym3rgmkyq"},{"value":"2jo1nujtwev","label":"uqpqhwnkw5j"},{"value":"uv7ahpida7n","label":"4qakqy07ixi"},{"value":"4eyoc9c1bnu","label":"p9h548ewa4"},{"value":"04o35qodvm","label":"3n0yuxcx9x1"},{"value":"9f5g7vx66vi","label":"c9a4ucv2jmu"},{"value":"yahuody42ia","label":"fkbx7ka99p6"},{"value":"dklst1wkcbu","label":"3zw3y0ylsx4"},{"value":"hsfpy2iqmo6","label":"6sdtvynzxjs"},{"value":"l4q1jg1c98i","label":"obs3k85yqq"},{"value":"0djzgh8rdxhm","label":"lam7twovj2f"},{"value":"hrol863nrbq","label":"q6c0i14krqd"},{"value":"63qjkzpqopt","label":"ijkkmf0rup"},{"value":"38e2halgi1n","label":"9yf29xmqrv"},{"value":"a8khyuemcu7","label":"2m1uhzqe3yc"},{"value":"5u5rvysdnjp","label":"bsqv58s0k1f"}]

    const onCheck = (value,targetNode) => {
        console.log(value,targetNode)
        setChecked(value);
        findCurrentNode(nodes, targetNode);
    };

    const onExpand = (value,targetNode) => {
        console.log(value,targetNode)
        
        findCurrentNode(nodes, targetNode);
        const othernodes = JSON.parse(JSON.stringify(nodes))
        if (othernodes[0].children[1].children.length <= 1) {
            othernodes[0].children[1].children = othernodes[0].children[1].children.concat(onodes)
            setTimeout(() => {
                setNodes(othernodes)
            }, 2000);
        }

        if (othernodes[0].children[0].children.length <= 3) {
            othernodes[0].children[0].children = onodes1
            setTimeout(() => {
                setNodes(othernodes)
            }, 2000);
        }

        setExpanded(value);
    };

    const findCurrentNode = function (treeNodes, node) {
        if (!treeNodes || !treeNodes.length || !node) return;

        for (var i = 0, len = treeNodes.length; i < len; i++) {

            var childs = treeNodes[i].children;

            if(treeNodes[i].value === node.value) {
                treeNodes[i].isSelected = true
            } else {
                treeNodes[i].isSelected = false
            }

            if (childs && childs.length > 0) {
                findCurrentNode(childs, node);
            }
        }
    };

    
    

    return (
        <div className="expand-all-container">
        <CheckboxTree
            checked={checked}
            expanded={expanded}
            nodes={nodes}
            onCheck={onCheck}
            onExpand={onExpand}
            showNodeIcon={false}
            showCheckbox={false}
            onlyLeafCheckboxes={true}
            showExpandAll={true}
            icons={{
                check: '',
                uncheck: '',
                halfCheck: '',
                parentClose: '',
                parentOpen: '',
                leaf:'',
                expandAll: <span className="rct-icon rct-icon-expand-all" />,
                collapseAll: <span className="rct-icon rct-icon-collapse-all" />,
                loadingIcon: <span className="rct-icon rct-icon-spinner-third" />,
                expandClose: <span className="rct-icon rct-icon-caret-right" />,
                expandOpen: <span className="rct-icon rct-icon-caret-down" />
            }}
        />
        </div>
    );
}

export default BasicExample;

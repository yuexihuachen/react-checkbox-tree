import React, { useEffect, useState } from 'react';
import CheckboxTree from 'react-checkbox-tree';
import { CaretRightOutlined, LoadingOutlined } from '@ant-design/icons'
import * as common from './common';

const deepClone = (str) => {
    return JSON.parse(JSON.stringify(str))
}

function CustomerExample() {
    const [checked, setChecked] = useState(['2003']);
    const [expanded, setExpanded] = useState(['1']);
    const [clicked, setClicked] = useState({});
    const [loading, setLoading] = useState([])
    const [allNodes, setAllNodes] = useState(common.customerNodes)

    const onCheck = (value) => {
        setChecked(value);
    };

    const onExpand = (value) => {
        setExpanded(value);
    };

    const onClick = (value) => {
        setClicked(value);
        setChecked([String(value.value)]);
        if (!value?.children?.length) {
            setLoading([String(value.value)])
        }
        setTimeout(() => {
            common.customerNodes[0].children.forEach(node => {
                if (!node?.children?.length) {
                    node.children.push(  {
                        "id": 2111,
                        "name": "money_laundering",
                        "label": "Money laundering",
                        "schema": null,
                        "parent_id": 2110,
                        "created_at": "2023-04-13T02:50:04.854Z",
                        "updated_at": "2023-04-13T02:50:04.854Z",
                        "value": 2111
                    })
                }
            })
            setLoading([])
            setAllNodes(common.customerNodes)
        }, 2000);
    };

    useEffect(() => {

    },[])

    const notClickedText = '(none)';
    const displayText = clicked.value || notClickedText;

    return (
        <div className="clickable-labels">
            <CheckboxTree
                checked={checked}
                expandOnClick
                expanded={expanded}
                loading={loading}
                nodes={deepClone(allNodes)}
                noCascade
                showExpandAll
                onlyLeafCheckboxes={true}
                onCheck={onCheck}
                onClick={onClick}
                onExpand={onExpand}
                showNodeIcon={false}
                icons={{
                    expandClose: <CaretRightOutlined className="rct-expandclose" />,
                    expandOpen: <CaretRightOutlined className="rct-expandopen" />,
                    expandAll: <span>Expand All</span>,
                    collapseAll: <span>Collapse All</span>,
                    loading: <LoadingOutlined />
                }}
            />
            <div className="clickable-labels-info">
                <strong>Clicked Node</strong>
                {`: ${displayText}`}
            </div>
        </div>
    );
}


export default CustomerExample;

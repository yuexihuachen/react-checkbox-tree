import React, { useState } from 'react';
import CheckboxTree from 'react-checkbox-tree';

import { fileSystem as nodes } from './common';

function NoCascadeExample() {
    const [checked, setChecked] = useState([
        '/app'
    ]);
    const [expanded, setExpanded] = useState([
        '/app',
        '/app/Http',
    ]);

    const [clicked, setClicked] = useState({});

    const onClick = (value) => {
        setClicked(value);
    };

    const onCheck = (value) => {
        setChecked(value);
    };

    const onExpand = (value) => {
        setExpanded(value);
    };

    return (
        <CheckboxTree
            checked={checked}
            expanded={expanded}
            expandOnClick
            noCascade
            nodes={nodes}
            onClick={onClick}
            onCheck={onCheck}
            onExpand={onExpand}
        />
    );
}

export default NoCascadeExample;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTree } from '../../../redux/slices/server';
import { TreeView } from '@patternfly/react-core';

const NodePanel = () => {
    let tree = useSelector(rootState => rootState.server.nodesTree);
    let dispatch = useDispatch();

    let onSelectHandler = (_e, item) => {
        dispatch(updateTree({
            id: item.id
        }));
    }

    return (
        <TreeView 
            data={tree}
            onSelect={(e, item) => onSelectHandler(e, item)}
        />
    )
}

export default NodePanel;
import { createSlice } from '@reduxjs/toolkit'

const initialTree = [
    {
        name: '1',
        id: '1',
        children: [
            {name: '1a', id: '1a', children: [{name: '1aa', id: '1aa'}]},
            {name: '1b', id: '1b', children: undefined}
        ]
    },
    {
        name: '2',
        id: '2',
        children: [
            {name: '2a', id: '2a'},
            {name: '2b', id: '2b'}
        ]
    }
]

const initialState = {
    serverUrl: 'opc.tcp://example.endpoint.com',
    searchUrl: 'opc.tcp://example.endpoint.com',
    nodesTree: initialTree
}

const updateTreeReducer = (state, action) => {
    console.log(action)
}

const updateServerUrlReducer = (state, action) => {
    state.serverurl = action.payload.url;
}

const serverSlice = createSlice({
    name: 'server',
    initialState: initialState,
    reducers: {
        updateServerUrl: updateServerUrlReducer,
        updateTree: updateTreeReducer 
    }
})


export const { updateServerUrl, updateTree } = serverSlice.actions;

export default serverSlice.reducer
import { configureStore } from '@reduxjs/toolkit';
import serverReducer from './slices/server';

let store = configureStore({
    reducer: {
        server: serverReducer
    }
})

export default store;
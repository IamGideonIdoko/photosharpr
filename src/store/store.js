import {configureStore} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import currentFileReducer from '@store/slice/currentFile.slice';
import fileReducer from '@store/slice/file.slice';
import sidebarReducer from '@store/slice/sidebar.slice';
import environmentReducer from '@store/slice/environment.slice';

const reducers = combineReducers({
    currentFile: currentFileReducer,
    file: fileReducer,
    sidebar: sidebarReducer,
    environment: environmentReducer
});

const persistConfig = {
    key: 'photosharpr',
    storage,
    whitelist: []
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export default store;
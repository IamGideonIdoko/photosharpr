import {configureStore} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
// import customerReducer from '@store/slice/customer.slice';
// import chatReducer from '@store/slice/chat.slice';
// import articleReducer from '@store/slice/article.slice';

const reducers = combineReducers({

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
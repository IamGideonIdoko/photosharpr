import { combineReducers } from "redux";
import sidebarReducer from './sidebarReducer';
import fileReducer from './fileReducer';

export default combineReducers({
    sidebar: sidebarReducer,
    file: fileReducer

});
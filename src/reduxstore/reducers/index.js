import { combineReducers } from "redux";
import sidebarReducer from './sidebarReducer';
import fileReducer from './fileReducer';
import currentFileReducer from "./currentFileReducer";

export default combineReducers({
    sidebar: sidebarReducer,
    file: fileReducer,
    currentFile: currentFileReducer

});
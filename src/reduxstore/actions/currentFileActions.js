import {
    LOAD_CURRENT_FILElIST, POPULATE_FILE_INFO
} from '../types';

export const loadCurrentFilelist = (filelist) => {
    return {
        type: LOAD_CURRENT_FILElIST,
        payload: filelist
    };
}

export const populateFileInfo = (info) => {
    return {
        type: POPULATE_FILE_INFO,
        payload: info
    }
}
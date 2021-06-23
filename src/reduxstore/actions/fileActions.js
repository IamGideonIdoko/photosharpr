import {
    LOAD_FILE_INPUT
} from '../types';

export const loadFileInput = (fileInput) => {
    return {
        type: LOAD_FILE_INPUT,
        payload: fileInput
    };
}

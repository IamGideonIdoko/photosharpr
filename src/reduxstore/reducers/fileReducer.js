import {LOAD_FILE_INPUT} from './../types';

const initialState = {
    fileUploadInputElement: null
}

const fileReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOAD_FILE_INPUT:
            return {
                ...state,
                fileUploadInputElement: action.payload
            }
        default:
            return state;
    }

}

export default fileReducer;
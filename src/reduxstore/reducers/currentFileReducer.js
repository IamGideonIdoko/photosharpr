import {LOAD_CURRENT_FILElIST, POPULATE_FILE_INFO} from './../types';

const initialState = {
    currentFilelist : null,
    isImageLoaded: false,
    currentImageInfo: {} /* CURRENT IMAGE INFO MODEl>>]
    name,
    type,
    filesize,
    width,
    height
     */
}

const currentFileReducer = (state = initialState, action) => {

    switch(action.type) {
        case LOAD_CURRENT_FILElIST:
            return {
                ...state,
                currentFilelist: action.payload
            }
        case POPULATE_FILE_INFO:
            return {
                ...state,
                isImageLoaded: true,
                currentImageInfo: action.payload
            }

        default:
            return state;
    }

}

export default currentFileReducer;
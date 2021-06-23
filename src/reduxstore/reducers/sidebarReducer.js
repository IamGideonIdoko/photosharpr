import {ACTIVATE_ALL_SIDEBARS, ACTIVATE_NO_SIDEBARS, ACTIVATE_ONLY_LEFT_SIDEBAR, ACTIVATE_ONLY_RIGHT_SIDEBAR} from './../types';

const initialState = {
    isLeftSidebarOpen: true,
    isRightSidebarOpen: true
}

const sidebarReducer = (state = initialState, action) => {

    switch(action.type) {
        case ACTIVATE_ALL_SIDEBARS:
            return {
                ...state,
                isLeftSidebarOpen: true,
                isRightSidebarOpen: true
            };
        case ACTIVATE_NO_SIDEBARS:
            return {
                ...state,
                isLeftSidebarOpen: false,
                isRightSidebarOpen: false
            };
        case ACTIVATE_ONLY_LEFT_SIDEBAR:
            return {
                ...state,
                isLeftSidebarOpen: true,
                isRightSidebarOpen: false
            };
        case ACTIVATE_ONLY_RIGHT_SIDEBAR:
            return {
                ...state,
                isLeftSidebarOpen: false,
                isRightSidebarOpen: true
            };
        default:
            return state;
    }

}

export default sidebarReducer;
import {
    ACTIVATE_ALL_SIDEBARS,
    ACTIVATE_NO_SIDEBARS,
    ACTIVATE_ONLY_LEFT_SIDEBAR,
    ACTIVATE_ONLY_RIGHT_SIDEBAR
} from '../types';

export const closeAllSidebars = () => {
    return {
        type: ACTIVATE_NO_SIDEBARS
    };
}

export const openOnlyLeftSidebar = () => {
    return {
        type: ACTIVATE_ONLY_LEFT_SIDEBAR
    };
}

export const openOnlyRightSidebar = () => {
    return {
        type: ACTIVATE_ONLY_RIGHT_SIDEBAR
    };
}

export const openAllSidebars = () => {
    return {
        type: ACTIVATE_ALL_SIDEBARS
    };
}

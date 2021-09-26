import {createSlice} from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        isLeftSidebarOpen: true,
        isRightSidebarOpen: true
    },
    reducers: {
        closeAllSidebars: (state, action) => {
            state.isLeftSidebarOpen = false;
            state.isRightSidebarOpen = false;
        },
        openOnlyRightSidebar: (state, action) => {
            state.isLeftSidebarOpen = false;
            state.isRightSidebarOpen = true;
        },
        openOnlyLeftSidebar: (state, action) => {
            state.isLeftSidebarOpen = true;
            state.isRightSidebarOpen = false;

        },
        openAllSidebars: (state, action) => {
            state.isLeftSidebarOpen = true;
            state.isRightSidebarOpen = true;
        }
    },
    extraReducers: {}
});

export const {
    closeAllSidebars,
    openAllSidebars,
    openOnlyLeftSidebar,
    openOnlyRightSidebar
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
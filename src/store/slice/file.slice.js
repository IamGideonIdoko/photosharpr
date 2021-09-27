import {createSlice} from '@reduxjs/toolkit';

const fileSlice = createSlice({
    name: 'file',
    initialState: {
        fileUploadInputElementLoaded: false
    },
    reducers: {
        loadFileInput: (state, action) => {
            window.fileUploadInputElement = action.payload;
            state.fileUploadInputElementLoaded = true
        }
    },
    extraReducers: {}
});

export const {
    loadFileInput
} = fileSlice.actions;

export default fileSlice.reducer;
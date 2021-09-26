import {createSlice} from '@reduxjs/toolkit';

const fileSlice = createSlice({
    name: 'file',
    initialState: {
        fileUploadInputElement: null
    },
    reducers: {
        loadFileInput: (state, action) => {
            state.fileUploadInputElement = action.payload;
        }
    },
    extraReducers: {}
});

export const {
    loadFileInput
} = fileSlice.actions;

export default fileSlice.reducer;
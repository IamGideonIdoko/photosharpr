import {createSlice} from '@reduxjs/toolkit';


const environmentSlice = createSlice({
    name: 'environment',
    initialState: {
        isOriginalOpen: true,
        isOutputOpen: true
    },
    reducers: {
        closeAllPreviews: (state, action) => {
            state.isOriginalOpen = false;
            state.isOutputOpen = false;
        },
        openOnlyOutput: (state, action) => {
            state.isOriginalOpen = false;
            state.isOutputOpen = true;
        },
        openOnlyOriginal: (state, action) => {
            state.isOriginalOpen = true;
            state.isOutputOpen = false;

        },
        openAllPreviews: (state, action) => {
            state.isOriginalOpen = true;
            state.isOutputOpen = true;
        }
    },
    extraReducers: {

    }
});


export const {
    closeAllPreviews,
    openAllPreviews,
    openOnlyOriginal,
    openOnlyOutput
} = environmentSlice.actions;

export default environmentSlice.reducer;
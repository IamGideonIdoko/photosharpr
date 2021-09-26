import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// export api redux actions
export const fetchData = createAsyncThunk('/chat/fetchData', async(arg, thunkAPI) => {

    const endpoint = `https://jsonplaceholder.typicode.com/users`;

    try {
        const res = await axios.get(endpoint, arg.body);
        console.log('Success Data');
        return res.data;
    } catch (err) {
        console.log('Error => ', err);
        return err.message || false
    }

});

export const currentFile = createSlice({
    name: 'currentFile',
    initialState: {
        currentFilelist: null,
        isImageLoaded: false,
        currentImageInfo: {}
        /* CURRENT IMAGE INFO SCHEMA>>]
    name,
    type,
    filesize,
    width,
    height
     */
    },
    reducers: {
        loadCurrentFilelist: (state, action) => {
            // add to chat array
            state.currentFilelist = action.payload;
        },
        populateFileInfo: (state, action) => {
            state.isImageLoaded = true;
            state.currentImageInfo = action.payload
        }

    },
    extraReducers: {
        /* [fetchData.pending]: (state, action) => {
            state.loading = 'loading';
        },
        [fetchData.fulfilled]: (state, action) => {
            if (action.payload?.status === 'success') {
                state.loading = 'loaded';
                console.log(action.payload);
            } else {
                state.loading = "error";
                console.log('Non success error => ', action.payload)
            }
        },
        [fetchData.rejected]: (state, action) => {
            state.loading = "error";
            console.log("Error => ", action.payload);
        } */
    }
});

// export actions
export const {
    loadCurrentFilelist,
    populateFileInfo
} = currentFile.actions;

export default currentFile.reducer;

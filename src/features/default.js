import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const defaultSlice = createSlice({
    name: "default",
    initialState: {
        value: initialState
    },
    reducers: {
        defaultAction: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { defaultAction } = defaultSlice.actions;

export default defaultSlice.reducer;
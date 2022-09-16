import { createSlice } from '@reduxjs/toolkit';
import galleryData from '../galleryData';

const initialState = {
    galleryItems: galleryData.galleryItems
}

export const gallerySlice = createSlice({
    name: "gallery",
    initialState: {
        value: initialState
    },
    reducers: {
        loadGallery: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { loadGallery } = gallerySlice.actions;

export default gallerySlice.reducer;
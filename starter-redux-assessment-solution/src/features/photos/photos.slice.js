import { createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../search/search.slice.js';
import photos from './photos.data.js';

const initialState = {
  photos,
};

const options = {
  name: 'photos',
  initialState,
  reducers: {
    // Task 1: Create an `addPhoto()` case reducer that adds a photo to state.photos. 
    // Task 1 Hint: You can use state.photos.unshift()
    // `unshift()` documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
    addPhoto: (state, action) => {
      state.photos.unshift(action.payload);
    },
   
    // Task 6: Create an `removePhoto()` case reducer that removes a photo from state.photos
    // Task 6 Hint: You can use state.photos.splice()
    // `splice()` documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    removePhoto: (state, action) => {
      const index = state.photos.findIndex(photo => photo.id === action.payload);
      if (index !== -1) {
        state.photos.splice(index, 1);
      }
    },

    // Task 15: Create a `toggleFavorite()` case reducer that toggles the isFavorite property of a photo
    // Task 15 Hint: Find the photo by id in state.photos and toggle its isFavorite boolean value
    // The action payload will contain the id of the photo to toggle
    toggleFavorite: (state, action) => {
      const photo = state.photos.find(photo => photo.id === action.payload);
      if (photo) {
        photo.isFavorite = !photo.isFavorite;
      }
    },

    // Task 16: Create an `editPhotoCaption()` case reducer that updates the caption of a photo
    // Task 16 Hint: Find the photo by id in state.photos and update its caption property
    // The action payload will contain an object with { id, newCaption }
    editPhotoCaption: (state, action) => {
      const photo = state.photos.find(photo => photo.id === action.payload.id);
      if (photo) {
        photo.caption = action.payload.newCaption;
      }
    },
  },
};

const photosSlice = createSlice(options);

// Task 15 & 16: Export the `toggleFavorite()` and `editPhotoCaption()` action creators once you implement their reducers above
export const { addPhoto, removePhoto, toggleFavorite, editPhotoCaption } = photosSlice.actions;

export default photosSlice.reducer;

export const selectAllPhotos = (state) => state.photos.photos;
export const selectFilteredPhotos = (state) => {
  // Task 12: Complete `selectFilteredPhotos()` selector to return a filtered list of photos whose captions match the user's search term
  const searchTerm = selectSearchTerm(state);
  return state.photos.photos.filter(photo =>
    photo.caption.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

// Task 17: Create a `selectFavoritedPhotos()` selector that returns only the photos where isFavorite is true
// This selector should follow the same pattern as selectAllPhotos
export const selectFavoritedPhotos = (state) => 
  state.photos.photos.filter(photo => photo.isFavorite);

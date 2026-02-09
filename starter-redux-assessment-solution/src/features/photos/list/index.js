import { useSelector, useDispatch } from 'react-redux';
import {
  // Task 7: Import the `removePhoto()` action creator from the photos slice
  removePhoto,
  selectAllPhotos,
  // Task 13: Import the `selectFilteredPhotos()` selector from the photos slice
  selectFilteredPhotos,
  // Task 25: Import the `toggleFavorite()` action creator from the photos slice
  toggleFavorite,
  // Task 26: Import the `editPhotoCaption()` action creator from the photos slice
  editPhotoCaption,
} from '../photos.slice';
import './list.css';

export default function PhotosList() {
  // Task 14: Call `useSelector()` below with `selectFilteredPhotos` instead of `selectAllPhotos`
  const photos = useSelector(selectFilteredPhotos);
  // Task 8: Store a reference to the Redux store's dispatch method in a variable called `dispatch`
  const dispatch = useDispatch();

  function handleDeleteButtonClick(id) {
    // Task 9: Dispatch the `removePhoto()` action creator, passing in the id
    dispatch(removePhoto(id));
  }

  // Task 27: Create a `handleToggleFavorite()` function that dispatches the `toggleFavorite()` action with the photo id
  function handleToggleFavorite(id) {
    dispatch(toggleFavorite(id));
  }

  // Task 28: Create a `handleEditCaption()` function that dispatches the `editPhotoCaption()` action with id and newCaption
  function handleEditCaption(id, newCaption) {
    dispatch(editPhotoCaption({ id, newCaption }));
  }

  const photosListItems = photos.map(({ id, caption, imageUrl, isFavorite }) => (
    <li key={id}>
      <img alt={caption} src={imageUrl} />
      <div>
        <p>{caption}</p>
        {/* Task 29: Add a button to toggle favorite status with data-testid={`${id}-favorite-button`} and call handleToggleFavorite() */}
        <button
          data-testid={`${id}-favorite-button`}
          onClick={() => handleToggleFavorite(id)}>
          {isFavorite ? '♥ Favorited' : '♡ Favorite'}
        </button>
        <button
          data-testid={`${caption}-button`}
          onClick={() => handleDeleteButtonClick(id)}>
          Delete
        </button>
        {/* Task 30: Add a button to edit caption with data-testid={`${id}-edit-button`} - for now use window.prompt() to get new caption and call handleEditCaption() */}
        <button
          data-testid={`${id}-edit-button`}
          onClick={() => {
            const newCaption = window.prompt('Enter new caption:', caption);
            if (newCaption && newCaption.trim()) {
              handleEditCaption(id, newCaption);
            }
          }}>
          Edit
        </button>
      </div>
    </li>
  ));

  return photosListItems.length > 0 ? (
    <ul>{photosListItems}</ul>
  ) : (
    <h3>No doggies to display...</h3>
  );
}

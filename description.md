# Tasks

In this project, you will edit various files in the `src/features` folder to achieve the desired functionality for Doggiegram.

## Add a new photo

A user should be able to add a photo to their collection. In the Add a dog section, when a user enters an image URL and a caption for the photo, the photo should appear in the list of photos displayed below.

In the `src/features/photos/photos.slice.js` file, complete the following task:

- Task 1: Create an `addPhoto()` case reducer that adds a photo to the state.

In the `src/features/photos/create/index.js` file, complete the following tasks:

- Task 2: Import the `useDispatch()` method from the appropriate package.
- Task 3: Import the `addPhoto()` action creator from the photos slice.
- Task 4: Store a reference to the Redux store's dispatch method in a variable called `dispatch`.
- Task 5: Dispatch the `addPhoto()` action creator, passing in the form data.

## Remove a photo

A user should be able to remove a photo from their collection. When a user clicks the Delete button on a photo, that photo should no longer be displayed on the page.

In the `src/features/photos/photos.slice.js` file, complete the following task:

- Task 6: Create a `removePhoto()` case reducer that removes a photo from `state.photos`.

In the `src/features/photos/list/index.js` file, complete the following tasks:

- Task 7: Import the `removePhoto()` action creator from the photos slice.
- Task 8: Store a reference to the Redux store's dispatch method in a variable called `dispatch`.
- Task 9: Dispatch the `removePhoto()` action creator, passing in the id.

## Search and filter the photos

A user should be able to search for a photo in their collection by providing a search term. For example, when the user enters "terrier" into the Search by caption box, then only photos whose captions match the term "terrier" should be displayed on the page. The matching should be case-insensitive, so "Terrier Tibetan" would be considered a match for the "terrier" search term.

First, spend some time studying the `src/features/search/search.slice.js` file. You don't have to edit anything in this file.

In the `src/features/search/search-bar/index.js` file, complete the following tasks:

- Task 10: Store a reference to the Redux store's dispatch method in a variable called `dispatch`.
- Task 11: Dispatch the `setSearchTerm()` action creator, passing in the value of the user's search input.

In the `src/features/photos/photos.slice.js` file, complete the following task:

- Task 12: Complete the `selectFilteredPhotos()` selector to return a filtered list of photos whose captions match the user's search term.

Finally, in the `src/features/photos/list/index.js` file, complete the following tasks:

- Task 13: Import the `selectFilteredPhotos()` selector from the photos slice.
- Task 14: Call `useSelector()` with `selectFilteredPhotos` instead of `selectAllPhotos`.

## Load a photo suggestion

In the Suggestion of the Day section, a user should be able to see a dog suggestion that can be added to their collection.

The user should see a loading state while the HTTP request for the suggestion is pending and an error state if the HTTP request for the suggestion fails.

In the `src/features/suggestion/suggestion.slice.js` file, complete the following tasks:

- Task 15: Complete the `createAsyncThunk()` function to load a suggestion from this URL: http://localhost:3004/api/suggestion.
- Task 16: Inside `extraReducers`, add reducers to handle all three promise lifecycle states (pending, fulfilled, and rejected) for the `fetchSuggestion()` call.
- Task 17: Create a selector, called `selectSuggestion`, for the suggestion state variable and export it from the file.

In the `src/features/suggestion/index.js` file, complete the following tasks:

- Task 18: Import the `selectSuggestion()` selector from the suggestion slice.
- Task 19: Call `useSelector()` with the `selectSuggestion()` selector. The component needs to access the `imageUrl` and `caption` properties of the suggestion object.
- Task 20: Dispatch the `fetchSuggestion()` action creator.
- Task 21: Enable the two JSX lines needed to display the suggestion on the page.

## Favorite and edit photos

A user should be able to mark a photo as a favorite and edit a photo caption. The favorite action should toggle a photo's `isFavorite` property. The edit action should update the caption for the selected photo.

In the `src/features/photos/photos.slice.js` file, complete the following tasks:

- Task 22: Create a `toggleFavorite()` case reducer that toggles the `isFavorite` property of a photo.
- Task 23: Create an `editPhotoCaption()` case reducer that updates the caption of a photo.
- Task 24: Create a `selectFavoritedPhotos()` selector that returns only photos where `isFavorite` is true.

In the `src/features/photos/list/index.js` file, complete the following tasks:

- Task 25: Import the `toggleFavorite()` action creator from the photos slice.
- Task 26: Import the `editPhotoCaption()` action creator from the photos slice.
- Task 27: Create a `handleToggleFavorite()` function that dispatches `toggleFavorite()` with the photo id.
- Task 28: Create a `handleEditCaption()` function that dispatches `editPhotoCaption()` with id and newCaption.
- Task 29: Add a button to toggle favorite status with `data-testid` `${id}-favorite-button` and call `handleToggleFavorite()`.
- Task 30: Add a button to edit caption with `data-testid` `${id}-edit-button`; use `window.prompt()` to get the new caption and call `handleEditCaption()`.
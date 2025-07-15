import { createSlice } from '@reduxjs/toolkit';
import { FavoritesData } from '../../../types/state';
import { NameSpace, RequestStatus } from '../../../const';
import { changeFavoriteStatus, fetchFavorites } from '../../api-action';

const initialState: FavoritesData = {
  favorites: [],
  requestStatus: RequestStatus.Idle,
  hasError: false,
};

export const favoritesData = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.
      addCase(fetchFavorites.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      }).
      addCase(fetchFavorites.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Success;
        state.favorites = action.payload;
      }).
      addCase(fetchFavorites.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      }).
      addCase(changeFavoriteStatus.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Success;
        if(action.payload.isFavorite) {
          state.favorites.unshift(action.payload);
        } else {
          state.favorites = state.favorites.filter((e) => e.id !== action.payload.id);
        }
      }).
      addCase(changeFavoriteStatus.rejected, (state) => {
        state.hasError = true;
      });
  },
});

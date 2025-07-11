import { createSlice } from '@reduxjs/toolkit';
import { FavoritesData } from '../../../types/state';
import { NameSpace, RequestStatus } from '../../../const';
import { fetchFavorites } from '../../api-action';

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
        state.hasError = true;
      });
  },
});

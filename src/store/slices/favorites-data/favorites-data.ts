import { createSlice } from '@reduxjs/toolkit';
import { FavoritesData } from '../../../types/state';
import { NameSpace, RequestStatus } from '../../../const';
import { changeFavoriteStatus, fetchFavorites } from '../../api-action';

const initialState: FavoritesData = {
  favorites: [],
  requestStatus: RequestStatus.Idle,
  error: null,
};

export const favoritesData = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {
    resetFavoriteError: (state) => {
      state.error = null;
    },
  },
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
      addCase(changeFavoriteStatus.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload.message;
        }
      });
  },
});

export const { resetFavoriteError } = favoritesData.actions;

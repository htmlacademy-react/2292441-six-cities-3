import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../../const';
import { OffersData } from '../../../types/state';
import { fetchOffers } from '../../api-action';
import { ChangeFavoriteStatus } from '../../../types/change-favorite-flag';


const initialState: OffersData = {
  offers: [],
  requestStatus: RequestStatus.Idle,
  hasError: false,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    refreshCards: (state, action: PayloadAction<ChangeFavoriteStatus>) => {
      state.offers.map((e) => {
        if (e.id === action.payload.id) {
          e.isFavorite = Boolean(action.payload.status);
        }
      });
    },
  },
  extraReducers(builder) {
    builder.
      addCase(fetchOffers.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      }).
      addCase(fetchOffers.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Success;
        state.offers = action.payload;
      }).
      addCase(fetchOffers.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
        state.hasError = true;
      });
  },
});

export const {refreshCards} = offersData.actions;

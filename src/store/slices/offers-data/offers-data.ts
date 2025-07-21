import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../../const';
import { OffersData } from '../../../types/state';
import { fetchOffers } from '../../api-action';
import { ChangeFavoriteStatus } from '../../../types/change-favorite-flag';


const initialState: OffersData = {
  offers: [],
  requestStatus: RequestStatus.Idle,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    refreshOffers: (state, action: PayloadAction<ChangeFavoriteStatus>) => {
      state.offers.map((offer) => {
        if (offer.id === action.payload.id) {
          offer.isFavorite = Boolean(action.payload.status);
        }
      });
    },
    resetOffers: (state) => {
      state.offers.map((offer) => {
        offer.isFavorite = false;
      });
    },
    applyFavorites: (state, action: PayloadAction<string[]>) => {
      state.offers.map((offer) => {
        if (action.payload.includes(offer.id)) {
          offer.isFavorite = true;
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
      });
  },
});

export const {refreshOffers, resetOffers, applyFavorites} = offersData.actions;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../../const';
import { OffersData } from '../../../types/state';
import { fetchOffers } from '../../api-action';
import { CityName } from '../../../types/city';

const initialState: OffersData = {
  offers: [],
  currentOffers: [],
  requestStatus: RequestStatus.Idle,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setCurrentOffers: (state, action: PayloadAction<CityName>) => {
      state.currentOffers = state.offers.filter((e) => e.city.name === action.payload);
    }
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

export const { setCurrentOffers } = offersData.actions;

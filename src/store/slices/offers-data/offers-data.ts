import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../../const';
import { OffersData } from '../../../types/state';
import { fetchOffers } from '../../api-action';

const initialState: OffersData = {
  offers: [],
  requestStatus: RequestStatus.Idle,
  hasError: false,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
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

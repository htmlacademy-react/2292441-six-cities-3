import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../../const';
import { OfferData } from '../../../types/state';
import { fetchOffer } from '../../api-action';

const initialState: OfferData = {
  offer: null,
  requestStatus: RequestStatus.Idle,
};

export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.
      addCase(fetchOffer.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      }).
      addCase(fetchOffer.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Success;
        state.offer = action.payload;
      }).
      addCase(fetchOffer.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      });
  },
});

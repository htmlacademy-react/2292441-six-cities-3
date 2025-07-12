import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../../const';
import { NearbyData } from '../../../types/state';
import { fetchNearbyOffers } from '../../api-action';

const initialState: NearbyData = {
  nearbyOffers: [],
  requestStatus: RequestStatus.Idle,
  hasError: false,
};

export const nearbyData = createSlice({
  name: NameSpace.Nearby,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.
      addCase(fetchNearbyOffers.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      }).
      addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Success;
        state.nearbyOffers = action.payload;
      }).
      addCase(fetchNearbyOffers.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
        state.hasError = true;
      });
  },
});

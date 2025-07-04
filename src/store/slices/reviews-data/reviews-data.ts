import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../../const';
import { ReviewsData } from '../../../types/state';
import { fetchOffers, fetchReviews, postReview } from '../../api-action';

const initialState: ReviewsData = {
  reviews: [],
  requestStatus: RequestStatus.Idle,
};

export const reviewsData = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.
      addCase(fetchReviews.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      }).
      addCase(fetchReviews.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Success;
        state.reviews = action.payload;
      }).
      addCase(fetchOffers.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      }).
      addCase(postReview.fulfilled, (state, action) => {
        state.reviews.unshift(action.payload);
      });
  },
});

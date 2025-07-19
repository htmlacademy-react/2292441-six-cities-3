import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../../const';
import { ReviewsData } from '../../../types/state';
import { fetchReviews, postReview } from '../../api-action';

const initialState: ReviewsData = {
  reviews: [],
  requestStatus: RequestStatus.Idle,
  postStatus: RequestStatus.Idle,
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
      addCase(fetchReviews.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      }).
      addCase(postReview.pending, (state) => {
        state.postStatus = RequestStatus.Loading;
      }).
      addCase(postReview.fulfilled, (state, action) => {
        state.postStatus = RequestStatus.Success;
        state.reviews.push(action.payload);
      }).
      addCase(postReview.rejected, (state) => {
        state.postStatus = RequestStatus.Failed;
      });
  },
});

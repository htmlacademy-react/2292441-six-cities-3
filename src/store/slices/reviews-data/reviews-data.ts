import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../../const';
import { ReviewsData } from '../../../types/state';
import { fetchReviews, postReview } from '../../api-action';

const initialState: ReviewsData = {
  reviews: [],
  requestStatus: RequestStatus.Idle,
  postStatus: RequestStatus.Idle,
  error: null,
};

export const reviewsData = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {
    resetReviewError: (state) => {
      state.error = null;
    },
  },
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
      addCase(postReview.rejected, (state, action) => {
        state.postStatus = RequestStatus.Failed;
        if (action.payload) {
          if ('details' in action.payload && action.payload.details.length) {
            state.error = action.payload.details[0].messages.join(' ');
          } else {
            state.error = action.payload.message;
          }
        }
      });
  },
});

export const { resetReviewError } = reviewsData.actions;

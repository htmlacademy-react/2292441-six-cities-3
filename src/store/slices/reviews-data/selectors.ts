import { State } from '../../../types/state';

export const SelectReviews = (state: State) => state.REVIEWS.reviews;
export const SelectReviewsRequestStatus = (state: State) => state.REVIEWS.requestStatus;

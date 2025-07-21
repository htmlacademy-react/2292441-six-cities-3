import { State } from '../../../types/state';
import { NameSpace } from '../../../const';

export const selectReviews = (state: State) => state[NameSpace.Reviews].reviews;
export const selectReviewsRequestStatus = (state: State) => state[NameSpace.Reviews].requestStatus;
export const selectReviewsPostStatus = (state: State) => state[NameSpace.Reviews].postStatus;

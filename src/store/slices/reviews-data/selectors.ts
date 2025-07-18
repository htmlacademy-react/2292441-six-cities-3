import { State } from '../../../types/state';
import { NameSpace } from '../../../const';

export const SelectReviews = (state: State) => state[NameSpace.Reviews].reviews;
export const SelectReviewsRequestStatus = (state: State) => state[NameSpace.Reviews].requestStatus;
export const SelectReviewsPostStatus = (state: State) => state[NameSpace.Reviews].postStatus;
export const SelectReviewError = (state: State) => state[NameSpace.Reviews].error;

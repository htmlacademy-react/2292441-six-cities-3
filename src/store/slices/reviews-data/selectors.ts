import { State } from '../../../types/state';
import { NameSpace } from '../../../const';

export const selectReviews = (state: State) => state[NameSpace.Reviews].reviews;
export const selectReviewsPostStatus = (state: State) => state[NameSpace.Reviews].postStatus;

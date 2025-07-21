import { MAX_RATING } from '../const';

export const getRatingStyle = (rating: number) => 100 / MAX_RATING * Math.round(rating);


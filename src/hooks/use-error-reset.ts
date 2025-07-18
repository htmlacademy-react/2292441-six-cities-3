import { ErrorType } from '../const';
import { resetLoginError } from '../store/slices/auth-process/auth-process';
import { resetFavoriteError } from '../store/slices/favorites-data/favorites-data';
import { resetReviewError } from '../store/slices/reviews-data/reviews-data';

export const useErrorReset = (type: ErrorType) => {
  switch (type) {
    case ErrorType.Auth :
      return resetLoginError;
    case ErrorType.Favorites :
      return resetFavoriteError;
    case ErrorType.Review :
      return resetReviewError;
  }
};

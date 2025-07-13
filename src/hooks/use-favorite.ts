import { useAppSelector } from '../hooks/use-app-selector';
import { SelectAuthorizationStatus } from '../store/slices/auth-process/selectors';
import { AppRoute, AuthorizationStatus } from '../const';
import { changeFavoriteStatus } from '../store/api-action';
import { redirectToRoute } from '../store/action';
import { SelectFavorites } from '../store/slices/favorites-data/selectors';
import { useAppDispatch } from './use-app-dispatch';
import { Offer } from '../types/offer';
import { FullOffer } from '../types/full-offer';

export const useFavorite = (offer: Offer | FullOffer | null) => {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(SelectAuthorizationStatus);
  const favorites = useAppSelector(SelectFavorites);

  const isFavorite = favorites.some((e) => e.id === offer?.id);
  const favoriteStatus = (isFavorite) ? 0 : 1;

  const favoriteClickHandler = () => {
    if (!offer) {
      return undefined;
    }
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(changeFavoriteStatus({id: offer.id, status: favoriteStatus}));
    } else {
      dispatch(redirectToRoute(AppRoute.Login));
    }
  };

  return {isFavorite, favoriteClickHandler};
};

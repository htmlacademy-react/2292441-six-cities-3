import { useCallback, useEffect, useState } from 'react';
import { useAppSelector } from '../hooks/use-app-selector';
import { selectAuthorizationStatus } from '../store/slices/auth-process/selectors';
import { AppRoute, AuthorizationStatus } from '../const';
import { useAppDispatch } from '../hooks/use-app-dispatch';
import { changeFavoriteStatus } from '../store/api-action';
import { ChangeFavoriteStatus } from '../types/change-favorite-flag';
import { refreshOffers } from '../store/slices/offers-data/offers-data';
import { useNavigate } from 'react-router-dom';
import { FullOffer } from '../types/full-offer';
import { Offer } from '../types/offer';

export const useFavorite = (offer: Offer | FullOffer | null) => {
  const authStatus = useAppSelector(selectAuthorizationStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (offer) {
      setIsFavorite(offer.isFavorite);
    }
  }, [offer]);

  const handleButtonClick = useCallback(() => {
    if (!offer) {
      return;
    }

    if (authStatus === AuthorizationStatus.Auth) {
      setIsFavorite(!isFavorite);

      const data: ChangeFavoriteStatus = {
        id: offer.id,
        status: isFavorite ? 0 : 1,
      };

      dispatch(changeFavoriteStatus(data));
      dispatch(refreshOffers(data));
    } else {
      navigate(AppRoute.Login);
    }
  }, [authStatus, dispatch, isFavorite, navigate, offer]);

  return {isFavorite, handleButtonClick};
};

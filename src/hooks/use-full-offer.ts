import { useAppDispatch } from './use-app-dispatch';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchOffer, fetchReviews, fetchNearbyOffers } from '../store/api-action';
import { useAppSelector } from './use-app-selector';
import { selectCity } from '../store/slices/main-process/selectors';
import { selectOffer } from '../store/slices/offer-data/selectors';
import { selectReviews } from '../store/slices/reviews-data/selectors';
import { selectNearbyOffers } from '../store/slices/nearby-data/selectors';
import { selectOfferRequestStatus } from '../store/slices/offer-data/selectors';
import { selectAuthorizationStatus } from '../store/slices/auth-process/selectors';
import { setActiveCard } from '../store/slices/main-process/main-process';
import { selectCurrentOffers } from '../store/selectors/select-current-offers';

export const useFullOffer = () => {
  const city = useAppSelector(selectCity);
  const offer = useAppSelector(selectOffer);
  const offers = useAppSelector(selectCurrentOffers);
  const reviews = useAppSelector(selectReviews);
  const nearby = useAppSelector(selectNearbyOffers);
  const status = useAppSelector(selectOfferRequestStatus);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  let images: string[] = [];
  let nearbyWithOffer = [...nearby];
  const currentOffer = offers.find((e) => e.id === offer?.id);

  if (offer) {
    images = offer.images.slice(0, 6);
    if (currentOffer) {
      nearbyWithOffer = [...nearby, currentOffer];
    }
  }

  const dispatch = useAppDispatch();
  const {id} = useParams();
  const sortedReviews = [...reviews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  useEffect(() => {
    let isMounted = true;

    if (id && isMounted) {
      Promise.all([
        dispatch(fetchOffer(id)),
        dispatch(fetchReviews(id)),
        dispatch(fetchNearbyOffers(id)),
        dispatch(setActiveCard(id))
      ]);
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch, id]);

  return {city, offer, images, sortedReviews, nearby, nearbyWithOffer, status, authorizationStatus};
};

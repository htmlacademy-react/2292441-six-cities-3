import { useAppDispatch } from './use-app-dispatch';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchOffer, fetchReviews, fetchNearbyOffers } from '../store/api-action';
import { useAppSelector } from './use-app-selector';
import { SelectCity } from '../store/slices/main-process/selectors';
import { SelectOffer } from '../store/slices/offer-data/selectors';
import { SelectReviews } from '../store/slices/reviews-data/selectors';
import { SelectNearbyOffers } from '../store/slices/nearby-data/selectors';
import { SelectOfferRequestStatus } from '../store/slices/offer-data/selectors';
import { SelectAuthorizationStatus } from '../store/slices/auth-process/selectors';
import { setActiveCard } from '../store/slices/main-process/main-process';
import { SelectCurrentOffers } from '../store/selectors/select-current-offers';

export const useFullOffer = () => {
  const city = useAppSelector(SelectCity);
  const offer = useAppSelector(SelectOffer);
  const offers = useAppSelector(SelectCurrentOffers);
  const reviews = useAppSelector(SelectReviews);
  const nearby = useAppSelector(SelectNearbyOffers);
  const status = useAppSelector(SelectOfferRequestStatus);
  const authorizationStatus = useAppSelector(SelectAuthorizationStatus);

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
    if (id) {
      Promise.all([
        dispatch(fetchOffer(id)),
        dispatch(fetchReviews(id)),
        dispatch(fetchNearbyOffers(id)),
        dispatch(setActiveCard(id))
      ]);
    }
  }, [dispatch, id]);

  return {city, offer, images, sortedReviews, nearby, nearbyWithOffer, status, authorizationStatus};
};

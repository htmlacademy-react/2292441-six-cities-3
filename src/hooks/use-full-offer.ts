import { useAppDispatch } from './use-app-dispatch';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchOffer, fetchReviews, fetchNearbyOffers } from '../store/api-action';
import { useAppSelector } from './use-app-selector';
import { SelectCity } from '../store/slices/main-process/selectors';
import { SelectCurrentOffers } from '../store/selectors/select-current-offers';
import { SelectOffer } from '../store/slices/offer-data/selectors';
import { SelectReviews } from '../store/slices/reviews-data/selectors';
import { SelectNearbyOffers } from '../store/slices/nearby-data/selectors';
import { SelectOfferRequestStatus } from '../store/slices/offer-data/selectors';
import { SelectAuthorizationStatus } from '../store/slices/auth-process/selectors';
import { setActiveCard } from '../store/slices/main-process/main-process';

export const useFullOffer = () => {
  const city = useAppSelector(SelectCity);
  const offers = useAppSelector(SelectCurrentOffers);
  const offer = useAppSelector(SelectOffer);
  const reviews = useAppSelector(SelectReviews);
  const nearbyOffers = useAppSelector(SelectNearbyOffers);
  const status = useAppSelector(SelectOfferRequestStatus);
  const authorizationStatus = useAppSelector(SelectAuthorizationStatus);

  let images: string[] = [];

  if (offer) {
    images = offer.images.length > 6 ? offer.images.slice(0, 6) : offer.images;
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

  return {city, offers, offer, images, sortedReviews, nearbyOffers, status, authorizationStatus};
};

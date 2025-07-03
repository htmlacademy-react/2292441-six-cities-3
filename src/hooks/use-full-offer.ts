import { useAppDispatch } from './use-app-dispatch';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchOffer, fetchReviews, fetchNearbyOffers } from '../store/api-action';
import { setActiveOfferId } from '../store/action';
import { useAppSelector } from './use-app-selector';
import { SelectCity } from '../store/selectors/city';
import { SelectOffers, SelectCurrentOffer, SelectNearbyOffers } from '../store/selectors/offers';
import { SelectRequestStatus } from '../store/selectors/request';
import { SelectReviews } from '../store/selectors/reviews';
import { SelectAuthorizationStatus } from '../store/selectors/authorization';

export const useFullOffer = () => {
  const city = useAppSelector(SelectCity);
  const offers = useAppSelector(SelectOffers);
  const offer = useAppSelector(SelectCurrentOffer);
  const reviews = useAppSelector(SelectReviews);
  const nearbyOffers = useAppSelector(SelectNearbyOffers);
  const status = useAppSelector(SelectRequestStatus);
  const authorizationStatus = useAppSelector(SelectAuthorizationStatus);

  const dispatch = useAppDispatch();
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      Promise.all([
        dispatch(fetchOffer(id)),
        dispatch(fetchReviews(id)),
        dispatch(fetchNearbyOffers(id)),
        dispatch(setActiveOfferId(id))
      ]);
    }
  }, [dispatch, id]);

  return {city, offers, offer, reviews, nearbyOffers, status, authorizationStatus};
};

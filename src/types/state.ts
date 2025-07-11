import { store } from '../store';
import { Offer, Offers } from './offer';
import { UserData } from './user-data';
import { City } from './city';
import { Reviews } from './review';
import { RequestStatus, AuthorizationStatus } from '../const';
import { FullOffer } from './full-offer';

export type AuthProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
  hasError: boolean;
};

export type MainProcess = {
  city: City;
  activeCard: Offer['id'];
};

export type NearbyData = {
  nearbyOffers: Offers;
  requestStatus: RequestStatus;
  hasError: boolean;
};

export type OfferData = {
  offer: FullOffer | null;
  requestStatus: RequestStatus;
  hasError: boolean;
};

export type OffersData = {
  offers: Offers;
  requestStatus: RequestStatus;
  hasError: boolean;
};

export type ReviewsData = {
  reviews: Reviews;
  requestStatus: RequestStatus;
  hasError: boolean;
};

export type FavoritesData = {
  favorites: Offers;
  requestStatus: RequestStatus;
  hasError: boolean;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


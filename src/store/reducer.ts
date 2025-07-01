import { createReducer } from '@reduxjs/toolkit';
import { setCity, fillPlacesList, setActiveOfferId, setAuthorizationStatus } from './action';
import { AuthorizationStatus, CITIES, RequestStatus } from '../const';
import { City } from '../types/city';
import { Offers } from '../types/offer';
import { fetchOffers, fetchOffer, fetchNearbyOffers, fetchReviews, postReview } from './api-action';
import { FullOffer } from '../types/full-offer';
import { Reviews } from '../types/review';

type InitialState = {
  city: City;
  offers: Offers;
  activeOfferId: string;
  currentOffers: Offers;
  currentOffer: FullOffer | null;
  authorizationStatus: AuthorizationStatus;
  requestStatus: RequestStatus;
  reviews: Reviews;
  nearbyOffers: Offers;
};

const initialState: InitialState = {
  city: CITIES[0],
  offers: [],
  activeOfferId: '',
  currentOffers: [],
  currentOffer: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  requestStatus: RequestStatus.Idle,
  reviews: [],
  nearbyOffers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder.
    addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    }).
    addCase(fetchOffers.pending, (state) => {
      state.requestStatus = RequestStatus.Loading;
    }).
    addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.requestStatus = RequestStatus.Success;
    }).
    addCase(fetchOffers.rejected, (state) => {
      state.requestStatus = RequestStatus.Failed;
    }).
    addCase(setCity, (state, action) => {
      state.city = action.payload;
    }).
    addCase(fillPlacesList, (state, action) => {
      state.currentOffers = state.offers.filter((e) => e.city.name === action.payload);
    }).
    addCase(setActiveOfferId, (state, action) => {
      state.activeOfferId = action.payload;
    }).
    addCase(fetchOffer.pending, (state) => {
      state.requestStatus = RequestStatus.Loading;
    }).
    addCase(fetchOffer.fulfilled, (state, action) => {
      state.currentOffer = action.payload;
      state.requestStatus = RequestStatus.Success;
    }).
    addCase(fetchOffer.rejected, (state) => {
      state.requestStatus = RequestStatus.Failed;
    }).
    addCase(fetchReviews.pending, (state) => {
      state.requestStatus = RequestStatus.Loading;
    }).
    addCase(fetchReviews.fulfilled, (state, action) => {
      state.reviews = action.payload;
      state.requestStatus = RequestStatus.Success;
    }).
    addCase(fetchReviews.rejected, (state) => {
      state.requestStatus = RequestStatus.Failed;
    }).
    addCase(fetchNearbyOffers.pending, (state) => {
      state.requestStatus = RequestStatus.Loading;
    }).
    addCase(fetchNearbyOffers.fulfilled, (state, action) => {
      state.nearbyOffers = action.payload;
      state.requestStatus = RequestStatus.Success;
    }).
    addCase(fetchNearbyOffers.rejected, (state) => {
      state.requestStatus = RequestStatus.Failed;
    }).
    addCase(postReview.fulfilled, (state, action) => {
      state.reviews.push(action.payload);
    });
});

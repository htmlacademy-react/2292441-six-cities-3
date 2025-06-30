import { createReducer } from '@reduxjs/toolkit';
import { setCity, fillPlacesList, setActiveOfferId, setAuthorizationStatus } from './action';
import { AuthorizationStatus, CITIES, RequestStatus } from '../const';
import { City } from '../types/city';
import { Offers } from '../types/offer';
import { fetchOffers, fetchOffer } from './api-action';
import { FullOffer } from '../types/full-offer';

type InitialState = {
  city: City;
  offers: Offers;
  activeOfferId: string;
  currentOffers: Offers;
  currentOffer: FullOffer;
  authorizationStatus: AuthorizationStatus;
  requestStatus: RequestStatus;
};

const initialState: InitialState = {
  city: CITIES[0],
  offers: [],
  activeOfferId: '',
  currentOffers: [],
  currentOffer: {} as FullOffer,
  authorizationStatus: AuthorizationStatus.Unknown,
  requestStatus: RequestStatus.Idle,
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
      state.requestStatus = RequestStatus.Success;
      state.offers = action.payload;
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
      state.requestStatus = RequestStatus.Success;
      state.currentOffer = action.payload;
    }).
    addCase(fetchOffer.rejected, (state) => {
      state.requestStatus = RequestStatus.Failed;
    });
});

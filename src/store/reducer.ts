import { createReducer } from '@reduxjs/toolkit';
import { setCity, fillPlacesList, loadOffers } from './action';
import { AuthorizationStatus, CITIES } from '../const';
import { City } from '../types/city';
import { Offers } from '../types/offer';

type InitialState = {
  city: City;
  offers: Offers;
  authorizationStatus: AuthorizationStatus;
};

const initialState: InitialState = {
  city: CITIES[0],
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.
    addCase(setCity, (state, action) => {
      state.city = action.payload;
    }).
    addCase(fillPlacesList, (state, action) => {
      state.offers = state.offers.filter((e) => e.city.name === action.payload);
    }).
    addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});

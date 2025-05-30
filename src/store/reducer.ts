import { createReducer } from '@reduxjs/toolkit';
import { setCity, fillPlacesList } from './action';
import { findOffers } from './util';
import { CITIES } from '../const';

const initialState = {
  city: CITIES[0],
  offers: findOffers('Paris'),
};

export const reducer = createReducer(initialState, (builder) => {
  builder.
    addCase(setCity, (state, city) => {
      state.city = city.payload;
    }).
    addCase(fillPlacesList, (state, city) => {
      state.offers = findOffers(city.payload);
    });
});

import { createReducer } from '@reduxjs/toolkit';
import { amsterdamOffers } from '../mocks/offers';
import { changeCity, fillPlacesList } from './action';

const initialState = {
  city: 'Amsterdam',
  offers: amsterdamOffers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.
    addCase(changeCity, (state) => state).
    addCase(fillPlacesList, (state) => state);
});

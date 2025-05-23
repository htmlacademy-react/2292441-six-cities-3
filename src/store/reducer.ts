import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { changeCity, fillPlacesList } from './action';

const initialState = {
  city: 'Amsterdam',
  offers: offers
};

export const reducer = createReducer(initialState, (builder) => {
  builder.
    addCase(changeCity, (state) => state).
    addCase(fillPlacesList, (state) => state);
});

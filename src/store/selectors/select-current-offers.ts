import { createSelector } from '@reduxjs/toolkit';
import { selectOffers } from '../slices/offers-data/selectors';
import { selectCity } from '../slices/main-process/selectors';

export const selectCurrentOffers = createSelector(
  [selectCity, selectOffers],
  (city, offers) => offers.filter((offer) => offer.city.name === city.name)
);

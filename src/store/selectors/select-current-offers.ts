import { createSelector } from '@reduxjs/toolkit';
import { SelectOffers } from '../slices/offers-data/selectors';
import { SelectCity } from '../slices/main-process/selectors';

export const SelectCurrentOffers = createSelector(
  [SelectCity, SelectOffers],
  (city, offers) => offers.filter((offer) => offer.city.name === city.name)
);

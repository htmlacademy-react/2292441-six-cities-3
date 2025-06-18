import { createAction } from '@reduxjs/toolkit';
import { City, CityName } from '../types/city';
import { Offers } from '../types/offer';

export const setCity = createAction<City>('main/setCity');

export const fillPlacesList = createAction<CityName>('main/fillPlacesList');

export const loadOffers = createAction<Offers>('data/loadOffers');

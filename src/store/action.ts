import { createAction } from '@reduxjs/toolkit';
import { City, CityName } from '../types/city';
import { Offer } from '../types/offer';

export const setCity = createAction<City>('main/setCity');

export const fillPlacesList = createAction<CityName>('main/fillPlacesList');

export const setCurrentOffer = createAction<Offer>('offer/setCurrentOffer');

export const setActiveOfferId = createAction<string>('offer/setActiveOfferId');

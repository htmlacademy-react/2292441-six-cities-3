import { createAction } from '@reduxjs/toolkit';
import { City, CityName } from '../types/city';
import { AppRoute, AuthorizationStatus } from '../const';

export const setCity = createAction<City>('main/setCity');

export const fillPlacesList = createAction<CityName>('main/fillPlacesList');

export const setActiveOfferId = createAction<string>('offer/setActiveOfferId');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('authorization/setAuthorizationStatus');

export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');

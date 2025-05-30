import { createAction } from '@reduxjs/toolkit';
import { City, CityName } from '../types/city';

export const setCity = createAction<City>('main/setCity');
export const fillPlacesList = createAction<CityName>('main/fillPlacesList');

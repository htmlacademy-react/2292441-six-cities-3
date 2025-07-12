import { City } from '../types/city';
import { useAppDispatch } from './use-app-dispatch';
import { MouseEvent } from 'react';
import { useAppSelector } from './use-app-selector';
import { SelectCity } from '../store/slices/main-process/selectors';
import { setCurrentOffers } from '../store/slices/offers-data/offers-data';
import { setCity } from '../store/slices/main-process/main-process';

export const useCity = () => {
  const currentCity = useAppSelector(SelectCity);
  const dispatch = useAppDispatch();

  const cityChangeHandler = (city: City) => (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(setCity(city));
    dispatch(setCurrentOffers(city.name));
  };

  return {currentCity, cityChangeHandler};
};

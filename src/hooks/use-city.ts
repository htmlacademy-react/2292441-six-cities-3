import { City } from '../types/city';
import { useAppDispatch } from './use-app-dispatch';
import { MouseEvent } from 'react';
import { useAppSelector } from './use-app-selector';
import { SelectCity } from '../store/slices/main-process/selectors';
import { setCity } from '../store/slices/main-process/main-process';

export const useCity = () => {
  const currentCity = useAppSelector(SelectCity);
  const dispatch = useAppDispatch();

  const handleCityClick = (city: City) => (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(setCity(city));
  };

  return {currentCity, handleCityClick};
};

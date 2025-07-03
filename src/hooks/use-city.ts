import { City } from '../types/city';
import { useAppDispatch } from './use-app-dispatch';
import { setCity, fillPlacesList } from '../store/action';
import { MouseEvent } from 'react';
import { useAppSelector } from './use-app-selector';
import { SelectCity } from '../store/selectors/city';

export const useCity = () => {
  const currentCity = useAppSelector(SelectCity);
  const dispatch = useAppDispatch();

  const cityChangeHandler = (city: City) => (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(setCity(city));
    dispatch(fillPlacesList(city.name));
  };

  return {currentCity, cityChangeHandler};
};

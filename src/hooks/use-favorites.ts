import { useAppDispatch } from './use-app-dispatch';
import { useAppSelector } from './use-app-selector';
import { useEffect } from 'react';
import { fetchFavorites } from '../store/api-action';
import { SelectFavorites } from '../store/slices/favorites-data/selectors';

export const useFavorites = () => {
  const favorites = useAppSelector(SelectFavorites);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return favorites;
};

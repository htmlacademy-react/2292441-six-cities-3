import { CITIES } from '../const';
import { Offers } from '../types/offer';

export const useSortedFavorites = (favorites: Offers) => {
  const sortedFavorites = CITIES.map((city) => favorites.filter((e) => e.city.name === city.name));

  return sortedFavorites;
};

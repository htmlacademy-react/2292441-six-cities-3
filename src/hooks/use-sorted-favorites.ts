import { CITIES } from '../const';
import { Offers } from '../types/offer';

export const useSortedFavorites = (favorites: Offers) => {
  const sortedFavorites = CITIES.map((city) => favorites.filter((offer) => offer.city.name === city.name));

  return sortedFavorites;
};

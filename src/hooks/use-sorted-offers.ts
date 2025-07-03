import { Offers } from '../types/offer';
import { SortingOption } from '../types/sorting-option';

export const useSortedOffers = (offers: Offers, sortingOption?: SortingOption) => {
  if (!sortingOption) {
    return offers;
  }

  switch (sortingOption) {
    case 'Popular':
      return offers;
    case 'Price: high to low':
      return offers.toSorted((a, b) => b.price - a.price);
    case 'Price: low to high':
      return offers.toSorted((a, b) => a.price - b.price);
    case 'Top rated first':
      return offers.toSorted((a, b) => b.rating - a.rating);
  }
};

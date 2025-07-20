export const usePlaceCardClasses = (parent: string) => {
  const isMainList = parent === 'cities__places-list';
  const isNearList = parent === 'near-places__list';
  const isFavorites = parent === 'favorites__places';

  const getClasses = () => {
    switch (parent) {
      case 'cities__places-list':
        return {card: 'cities__card place-card', imageWrapper: 'cities__image-wrapper place-card__image-wrapper'};
      case 'near-places__list':
        return {card: 'near-places__card place-card', imageWrapper: 'near-places__image-wrapper place-card__image-wrapper'};
      case 'favorites__places':
        return {card: 'favorites__card place-card', imageWrapper: 'favorites__image-wrapper place-card__image-wrapper'};
      default:
        return {card: '', imageWrapper: ''};
    }
  };

  const {card, imageWrapper} = getClasses();

  return {isMainList, isNearList, isFavorites, card, imageWrapper};
};

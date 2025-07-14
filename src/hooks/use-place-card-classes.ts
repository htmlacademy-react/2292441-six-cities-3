export const usePlaceCardClasses = (parent: string) => {
  const isMainList = parent === 'cities__places-list';
  const isNearList = parent === 'near-places__list';
  const isFavorites = parent === 'favorites__places';

  const getCardClass = () => {
    if (isNearList) {
      return 'near-places__card';
    } else if (isFavorites) {
      return 'favorites__card';
    }

    return 'cities__card';
  };

  const getImgWrapperClass = () => {
    if (isNearList) {
      return 'near-places__image-wrapper';
    } else if (isFavorites) {
      return 'favorites__image-wrapper';
    }

    return 'cities__image-wrapper';
  };

  const card = `${getCardClass()} place-card`;
  const imgWrapper = `${getImgWrapperClass()} place-card__image-wrapper`;

  return {isMainList, isNearList, isFavorites, card, imgWrapper};
};

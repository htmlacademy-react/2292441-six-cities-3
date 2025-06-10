import { ImageSize } from './types';
import { AVATAR_SIZE, COMMENTS, DATES, DESCRIPTIONS, MARKS_COORDS_RANGE, NAMES, OFFER_PHOTO_SIZE, PLACEHOLDER_URL, TITLES, TYPES, IDS, FEATURES } from './const';
import { Review, Offers } from '../types/offer';
import { CityName } from '../types/city';
import { CITIES } from '../const';

const getRandomBoolean = () => !Math.round(Math.random());

const getRandomNumber = (min: number, max:number, precision?: number) => {
  if (max < min) {
    [min, max] = [max, min];
  }

  max -= min;

  if (precision) {
    return parseFloat((Math.random() * max + min).toFixed(precision));
  }
  return Math.floor(Math.random() * ++max) + min;
};

const getRandomArrayElement = <T>(array: T[]) => array[getRandomNumber(0, array.length - 1)];


const getPlaceholderUrl = (size: ImageSize) => `${PLACEHOLDER_URL}${size.width}/${size.height}?random=${Math.random()}`;

const getPlaceholderArray = (length: number, size: ImageSize) => Array.from({ length }, () => getPlaceholderUrl(size));

const getReview = (): Review => {
  const review = {
    id: getRandomArrayElement(IDS),
    user: {
      name: getRandomArrayElement(NAMES),
      avatarUrl: getPlaceholderUrl(AVATAR_SIZE),
      isPro: getRandomBoolean()
    },
    rating: getRandomNumber(1, 5),
    comment: getRandomArrayElement(COMMENTS),
    date: getRandomArrayElement(DATES),
  };

  return review;
};

const getReviewArray = (length: number) => Array.from({ length }, () => getReview());

const getCoordsRange = (city: CityName) => {
  switch (city) {
    case 'Paris':
      return MARKS_COORDS_RANGE.paris;
    case 'Cologne':
      return MARKS_COORDS_RANGE.cologne;
    case 'Brussels':
      return MARKS_COORDS_RANGE.brussels;
    case 'Amsterdam':
      return MARKS_COORDS_RANGE.amsterdam;
    case 'Hamburg':
      return MARKS_COORDS_RANGE.hamburg;
    case 'Dusseldorf':
      return MARKS_COORDS_RANGE.dusseldorf;
  }
};

const getRandomLocation = (city: CityName) => {
  const { latRange, lonRange } = getCoordsRange(city);

  const latitude = getRandomNumber(latRange[0], latRange[1], 6);
  const longitude = getRandomNumber(lonRange[0], lonRange[1], 6);
  const zoom = 11;

  return { latitude, longitude, zoom };
};

const getNewRandomArray = <T>(data: T[]) => {
  const length = getRandomNumber(0, data.length);

  if (length === 0) {
    return undefined;
  }

  const newArr: T[] = Array.from({ length });

  return newArr.map((e, i) => {
    e = data[i];
    return e;
  });
};

const getOffer = (id: string) => {
  const city = getRandomArrayElement(CITIES);
  const images = getPlaceholderArray(6, OFFER_PHOTO_SIZE);

  const offer = {
    id: id,
    city: city,
    previewImage: getRandomArrayElement(images),
    images: images,
    title: getRandomArrayElement(TITLES),
    rating: getRandomNumber(1, 5, 1),
    type: getRandomArrayElement(TYPES),
    bedrooms: getRandomNumber(1, 6),
    maxAdults: getRandomNumber(1, 10),
    price: getRandomNumber(80, 300),
    isPremium: getRandomBoolean(),
    isFavorite: getRandomBoolean(),
    features: getNewRandomArray(FEATURES),
    host: {
      name: getRandomArrayElement(NAMES),
      avatarUrl: getPlaceholderUrl(AVATAR_SIZE),
      isPro: getRandomBoolean(),
    },
    description: getRandomArrayElement(DESCRIPTIONS),
    reviews: getReviewArray(getRandomNumber(1, 4)),
    location: getRandomLocation(city.name),
  };

  return offer;
};

export const getOffers = (amount: number) => {
  const arr: Offers = [];

  for (let i = 0; i < amount; i++) {
    const offer = getOffer(IDS[i]);
    arr.push(offer);
  }

  return arr;
};

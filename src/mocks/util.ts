import { ImageSize } from './types';
import { AVATAR_SIZE, COMMENTS, DATES, DESCRIPTIONS, NAMES, OFFER_PHOTO_SIZE, PLACEHOLDER_URL, TITLES, TYPES } from './const';
import { City, Offer, Review, Location, Offers } from '../types/offer';

const randomBoolean = !Math.round(Math.random());

const getRandomNumber = (min: number, max: number, precision = 0) => {
  if (min < 0 || max < 0 || max === min) {
    return -1;
  }
  if (max < min) {
    [min, max] = [max, min];
  }
  max -= min;
  if (precision > 0) {
    const string = (Math.random() * max + min).toFixed(precision);
    return parseInt(string, 10);
  }
  return Math.floor(Math.random() * ++max) + min;
};

const getRandomArrayElement = <T>(array: T[]) => array[getRandomNumber(0, array.length - 1)];


const getPlaceholderUrl = (size: ImageSize) => `${PLACEHOLDER_URL}${size.width}/${size.height}?random=${Math.random()}`;

const getPlaceholderArray = (length: number, size: ImageSize) => Array.from({ length }, () => getPlaceholderUrl(size));

const getReview = (): Review => {
  const review = {
    user: {
      name: getRandomArrayElement(NAMES),
      avatar: getPlaceholderUrl(AVATAR_SIZE),
      pro: randomBoolean
    },
    stars: getRandomNumber(1, 5),
    comment: getRandomArrayElement(COMMENTS),
    date: getRandomArrayElement(DATES),
  };

  return review;
};

const getReviewArray = (length: number) => Array.from({ length }, () => getReview());

const getOffer = (id: string, city: City, location: Location): Offer => {

  const offer = {
    id: id,
    city: city,
    images: getPlaceholderArray(6, OFFER_PHOTO_SIZE),
    title: getRandomArrayElement(TITLES),
    rating: getRandomNumber(1, 5),
    type: getRandomArrayElement(TYPES),
    bedrooms: getRandomNumber(1, 6),
    capacity: getRandomNumber(1, 10),
    price: getRandomNumber(80, 300),
    premium: randomBoolean,
    features: {
      wiFi: randomBoolean,
      heating: randomBoolean,
      kitchen: randomBoolean,
      fridge: randomBoolean,
      washingMachine: randomBoolean,
      coffeeMachine: randomBoolean,
      dishwasher: randomBoolean,
      towels: randomBoolean,
      babySeat: randomBoolean,
      cabelTV: randomBoolean,
    },
    host: {
      name: getRandomArrayElement(NAMES),
      avatar: getPlaceholderUrl(AVATAR_SIZE),
      pro: randomBoolean,
    },
    description: getRandomArrayElement(DESCRIPTIONS),
    reviews: getReviewArray(getRandomNumber(1, 4)),
    location: location,
  };

  return offer;
};

export const getOffersArray = (city: City, ids: string[], locations: Location[], amount: number) => {
  const array: Offers = [];

  for (let i = 0; i < amount; i++) {
    const offer = getOffer(ids[i], city, locations[i]);
    array.push(offer);
  }

  return array;
};

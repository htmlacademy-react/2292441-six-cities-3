import { ImageSize } from './types';
import { AVATAR_SIZE, COMMENTS, DATES, DESCRIPTIONS, MARKS_COORDS_RANGE, NAMES, OFFER_PHOTO_SIZE, PLACEHOLDER_URL, TITLES, TYPES, IDS } from './const';
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
    user: {
      name: getRandomArrayElement(NAMES),
      avatar: getPlaceholderUrl(AVATAR_SIZE),
      pro: getRandomBoolean()
    },
    stars: getRandomNumber(1, 5),
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

function getRandomLocation(city: CityName) {
  const { latRange, lonRange } = getCoordsRange(city);

  const latitude = getRandomNumber(latRange[0], latRange[1], 6);
  const longitude = getRandomNumber(lonRange[0], lonRange[1], 6);

  return {latitude, longitude};
}

const getOffer = (id: string) => {
  const city = getRandomArrayElement(CITIES.map((e) => e.name)) as CityName;

  const offer = {
    id: id,
    city: city,
    images: getPlaceholderArray(6, OFFER_PHOTO_SIZE),
    title: getRandomArrayElement(TITLES),
    rating: getRandomNumber(1, 5, 1),
    type: getRandomArrayElement(TYPES),
    bedrooms: getRandomNumber(1, 6),
    capacity: getRandomNumber(1, 10),
    price: getRandomNumber(80, 300),
    premium: getRandomBoolean(),
    features: {
      wiFi: getRandomBoolean(),
      heating: getRandomBoolean(),
      kitchen: getRandomBoolean(),
      fridge: getRandomBoolean(),
      washingMachine: getRandomBoolean(),
      coffeeMachine: getRandomBoolean(),
      dishwasher: getRandomBoolean(),
      towels: getRandomBoolean(),
      babySeat: getRandomBoolean(),
      cabelTV: getRandomBoolean(),
    },
    host: {
      name: getRandomArrayElement(NAMES),
      avatar: getPlaceholderUrl(AVATAR_SIZE),
      pro: getRandomBoolean(),
    },
    description: getRandomArrayElement(DESCRIPTIONS),
    reviews: getReviewArray(getRandomNumber(1, 4)),
    location: getRandomLocation(city),
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

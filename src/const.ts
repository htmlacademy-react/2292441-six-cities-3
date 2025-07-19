import { City } from './types/city';

export const REVIEW_LENGTH = {
  min: 50,
  max: 300
};

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const CITIES: City[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.8529682000,
      longitude: 2.3499021000,
      zoom: 11,
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.9412781000,
      longitude: 6.9582817000,
      zoom: 11,
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.8467322000,
      longitude: 4.3499989000,
      zoom: 11,
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.3675964307,
      longitude: 4.9041366576,
      zoom: 11,
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.5510846000,
      longitude: 9.9936818000,
      zoom: 11,
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.2277411000,
      longitude: 6.7734556000,
      zoom: 11,
    }
  }
];

export const DEFAULT_CITY = CITIES[0];

export const URL_MARKER_DEFAULT = '../../public/img/pin.svg';

export const URL_MARKER_ACTIVE = '../../public/img/pin-active.svg';

export const SORTING_OPTIONS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
] as const;

export const BACKEND_URL = 'https://15.design.htmlacademy.pro/six-cities';

export const REQUEST_TIMEOUT = 5000;

export const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

export enum APIRoute {
  Offers = '/offers',
  Favorites = '/favorite',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments'
}

export enum RequestStatus {
  Idle,
  Loading,
  Success,
  Failed
}

export enum NameSpace {
  Auth = 'AUTH',
  Main = 'MAIN',
  Offers = 'OFFERS',
  Offer = 'OFFER',
  Reviews = 'REVIEWS',
  Nearby = 'NEARBY',
  Favorites = 'FAVORITES',
  Errors = 'ERRORS'
}

export enum ErrorType {
  Server = 'SERVER_ERROR',
  Auth = 'AUTH_ERROR',
  Review = 'REVIEW_ERROR',
  Favorites = 'FAVORITES_ERROR',
  Nearby = 'NEARBY_LIST_ERROR',
  Offers = 'OFFERS_ERROR',
  Offer = 'OFFER_ERROR',
  Unknown = 'UNKNOWN_ERROR',
}

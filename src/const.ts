export const Setting = {
  OffersCount: 312,
} as const;

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

export const AMSTERDAM = {
  name: 'Amsterdam',
  lat: 52.3675964307,
  lng: 4.9041366576,
};

export const URL_MARKER_DEFAULT = '../../public/img/pin.svg';

export const URL_MARKER_ACTIVE = '../../public/img/pin-active.svg';

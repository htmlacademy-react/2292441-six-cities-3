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

export const PARIS = {
  name: 'Paris',
  zoom: 12,
  location: {
    latitude: 48.8529682000,
    longitude: 2.3499021000,
  }
};

export const COLOGNE = {
  name: 'Cologne',
  zoom: 12,
  location: {
    latitude: 50.9412781000,
    longitude: 6.9582817000,
  }
};

export const BRUSSELS = {
  name: 'Brussels',
  zoom: 12,
  location: {
    latitude: 50.8467322000,
    longitude: 4.3499989000,
  }
};

export const AMSTERDAM = {
  name: 'Amsterdam',
  zoom: 12,
  location: {
    latitude: 52.3675964307,
    longitude: 4.9041366576,
  }
};

export const HAMBURG = {
  name: 'Hamburg',
  zoom: 12,
  location: {
    latitude: 53.5510846000,
    longitude: 9.9936818000,
  }
};

export const DUSSELDORF = {
  name: 'Dusseldorf',
  zoom: 12,
  location: {
    latitude: 51.2277411000,
    longitude: 6.7734556000,
  }
};

export const URL_MARKER_DEFAULT = '../../public/img/pin.svg';

export const URL_MARKER_ACTIVE = '../../public/img/pin-active.svg';

export const MAIN_PLACES_LIST_CLASSES = {
  listClass: 'cities__places-list',
  itemClass: 'cities__card'
};

export const NEAR_PLACES_LIST_CLASSES = {
  listClass: 'near-places__list',
  itemClass: 'near-places__card'
};

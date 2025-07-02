import { Location } from './location';

export type City = {
  name: CityName;
  location: Location;
};

export type CityName = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

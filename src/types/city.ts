import { Location } from './offer';

export type City = {
  name: CityName;
  zoom: number;
  location: Location;
};

export type CityName = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

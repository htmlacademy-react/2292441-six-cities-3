import { City } from './city';
import { Location } from './location';
import { Host } from './host';

export type FullOffer = {
  id: string;
  city: City;
  images: string[];
  title: string;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  isPremium: boolean;
  isFavorite: boolean;
  goods: string[] | undefined;
  host: Host;
  description: string;
  location: Location;
};

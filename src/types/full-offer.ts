import { City } from './city';
import { Location } from './location';
import { User } from './user';

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
  host: User;
  description: string;
  location: Location;
};

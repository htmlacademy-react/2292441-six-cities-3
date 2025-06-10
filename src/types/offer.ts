import { City } from './city';

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type Review = {
  id: string;
  user: User;
  rating: number;
  comment: string;
  date: string;
};

export type Reviews = Review[];

export type Offer = {
  id: string;
  city: City;
  previewImage: string;
  images: string[];
  title: string;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  isPremium: boolean;
  isFavorite: boolean;
  features: string[] | undefined;
  host: User;
  description: string;
  reviews: Reviews;
  location: Location;
};

export type Offers = Offer[];

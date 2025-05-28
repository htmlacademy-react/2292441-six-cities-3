export type Location = {
  latitude: number;
  longitude: number;
};

export type City = {
  name: string;
  zoom: number;
  location: Location;
};

type User = {
  name: string;
  avatar: string;
  pro: boolean;
};

export type Review = {
  user: User;
  stars: number;
  comment: string;
  date: string;
};

export type Reviews = Review[];

export type Offer = {
  id: string;
  city: City;
  images: string[];
  title: string;
  rating: number;
  type: string;
  bedrooms: number;
  capacity: number;
  price: number;
  premium: boolean;
  features: {
    wiFi: boolean;
    heating: boolean;
    kitchen: boolean;
    fridge: boolean;
    washingMachine: boolean;
    coffeeMachine: boolean;
    dishwasher: boolean;
    towels: boolean;
    babySeat: boolean;
    cabelTV: boolean;
  };
  host: User;
  description: string[];
  reviews: Reviews;
  location: Location;
};

export type Offers = Offer[];

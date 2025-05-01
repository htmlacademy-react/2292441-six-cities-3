type Review = {
  user: {
    name: string;
    avatar: string;
  };
  stars: number;
  comment: string;
  date: string;
};

type Reviews = Review[];

export type Offer = {
  id: number;
  city: string;
  images: string[];
  title: string;
  rating: {
    stars: number;
    value: number;
  };
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
  host: {
    name: string;
    avatar: string;
    pro: boolean;
  };
  description: string[];
  reviews: Reviews;
  location: {
    lat: number;
    lng: number;
  };
};

export type Offers = Offer[];

type Review = {
  user: {
    name: string;
    avatar: string;
  };
  stars: number;
  comment: string;
};

type Reviews = Review[];

type Offer = {
  id: number;
  images: string[];
  title: string;
  stars: number;
  type: string;
  rooms: number;
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
    status: string;
  };
  description: string;
  reviews: Reviews;
  location: string;
};

export type Offers = Offer[];

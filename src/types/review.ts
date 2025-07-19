import { Host } from './host';

export type Review = {
  id: string;
  user: Host;
  rating: number;
  comment: string;
  date: string;
};

export type Reviews = Review[];

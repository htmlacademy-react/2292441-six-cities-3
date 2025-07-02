import { User } from './user';

export type Review = {
  id: string;
  user: User;
  rating: number;
  comment: string;
  date: string;
};

export type Reviews = Review[];

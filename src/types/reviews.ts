import { TUser } from './user';

export type TReviews = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: TUser;
}

import { FullOffer } from './full-offer';

export type PostCommentProps = {
  body: {
    comment: string;
    rating: number;
  };
  offerId: FullOffer['id'] | undefined;
};

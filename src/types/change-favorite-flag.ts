import { Offer } from './offer';

export type ChangeFavoriteStatus = {
  id: Offer['id'];
  status: 0 | 1;
};

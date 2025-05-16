import { Offer, Offers } from '../../types/offer';

export const getNearOffers = (offers: Offers, currentOffer: Offer) => offers.filter((e) => e !== currentOffer);

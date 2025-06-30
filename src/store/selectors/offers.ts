import { State } from '../../types/state';

export const SelectOffers = (state: State) => state.offers;
export const SelectActiveOfferId = (state: State) => state.activeOfferId;
export const SelectCurrentOffers = (state: State) => state.currentOffers;
export const SelectCurrentOffer = (state: State) => state.currentOffer;

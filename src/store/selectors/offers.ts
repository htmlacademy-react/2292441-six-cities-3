import { State } from '../../types/state';

export const SelectCity = (state: State) => state.city;
export const SelectOffers = (state: State) => state.offers;
export const SelectActiveOfferId = (state: State) => state.activeOfferId;
export const SelectRequestStatus = (state: State) => state.requestStatus;
export const SelectCurrentOffers = (state: State) => state.currentOffers;
export const SelectCurrentOffer = (state: State) => state.currentOffer;

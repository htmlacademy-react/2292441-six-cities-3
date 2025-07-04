import { State } from '../../../types/state';

export const SelectOffers = (state: State) => state.OFFERS.offers;
export const SelectCurrentOffers = (state: State) => state.OFFERS.currentOffers;
export const SelectOffersRequestStatus = (state: State) => state.OFFERS.requestStatus;

import { NameSpace } from '../../../const';
import { State } from '../../../types/state';

export const SelectOffers = (state: State) => state[NameSpace.Offers].offers;
export const SelectCurrentOffers = (state: State) => state[NameSpace.Offers].currentOffers;
export const SelectOffersRequestStatus = (state: State) => state[NameSpace.Offers].requestStatus;

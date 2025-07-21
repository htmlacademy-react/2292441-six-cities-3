import { NameSpace } from '../../../const';
import { State } from '../../../types/state';

export const selectOffers = (state: State) => state[NameSpace.Offers].offers;
export const selectOffersRequestStatus = (state: State) => state[NameSpace.Offers].requestStatus;

import { NameSpace } from '../../../const';
import { State } from '../../../types/state';

export const selectOffer = (state: State) => state[NameSpace.Offer].offer;
export const selectOfferRequestStatus = (state: State) => state[NameSpace.Offer].requestStatus;

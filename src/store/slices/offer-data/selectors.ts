import { NameSpace } from '../../../const';
import { State } from '../../../types/state';

export const SelectOffer = (state: State) => state[NameSpace.Offer].offer;
export const SelectOfferRequestStatus = (state: State) => state[NameSpace.Offer].requestStatus;

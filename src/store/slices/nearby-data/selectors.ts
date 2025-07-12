import { NameSpace } from '../../../const';
import { State } from '../../../types/state';

export const SelectNearbyOffers = (state: State) => state[NameSpace.Nearby].nearbyOffers;
export const SelectNearbyRequestStatus = (state: State) => state[NameSpace.Nearby].requestStatus;

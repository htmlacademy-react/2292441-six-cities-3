import { NameSpace } from '../../../const';
import { State } from '../../../types/state';

export const selectNearbyOffers = (state: State) => state[NameSpace.Nearby].nearbyOffers;
export const selectNearbyRequestStatus = (state: State) => state[NameSpace.Nearby].requestStatus;

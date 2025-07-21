import { NameSpace } from '../../../const';
import { State } from '../../../types/state';

export const selectFavorites = (state: State) => state[NameSpace.Favorites].favorites;
export const selectFavoritesRequestStatus = (state: State) => state[NameSpace.Favorites].requestStatus;

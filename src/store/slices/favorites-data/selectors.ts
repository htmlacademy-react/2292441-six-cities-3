import { NameSpace } from '../../../const';
import { State } from '../../../types/state';

export const SelectFavorites = (state: State) => state[NameSpace.Favorites].favorites;

import { NameSpace } from '../../../const';
import { State } from '../../../types/state';

export const selectCity = (state: State) => state[NameSpace.Main].city;
export const selectActiveCard = (state: State) => state[NameSpace.Main].activeCard;

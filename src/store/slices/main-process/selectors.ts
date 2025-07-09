import { NameSpace } from '../../../const';
import { State } from '../../../types/state';

export const SelectCity = (state: State) => state[NameSpace.Main].city;
export const SelectActiveCard = (state: State) => state[NameSpace.Main].activeCard;

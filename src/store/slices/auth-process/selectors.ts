import { State } from '../../../types/state';
import { NameSpace } from '../../../const';

export const SelectAuthorizationStatus = (state: State) => state[NameSpace.Auth].authorizationStatus;
export const SelectUser = (state: State) => state[NameSpace.Auth].user;

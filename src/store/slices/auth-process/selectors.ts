import { State } from '../../../types/state';
import { NameSpace } from '../../../const';

export const selectAuthorizationStatus = (state: State) => state[NameSpace.Auth].authorizationStatus;
export const selectUser = (state: State) => state[NameSpace.Auth].user;

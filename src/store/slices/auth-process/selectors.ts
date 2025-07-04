import { State } from '../../../types/state';

export const SelectAuthorizationStatus = (state: State) => state.AUTH.authorizationStatus;
export const SelectUser = (state: State) => state.AUTH.user;

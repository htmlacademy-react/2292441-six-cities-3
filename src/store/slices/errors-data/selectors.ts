import { NameSpace } from '../../../const';
import { State } from '../../../types/state';

export const selectErrors = (state: State) => state[NameSpace.Errors].errors;

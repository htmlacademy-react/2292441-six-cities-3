import { NameSpace } from '../../../const';
import { State } from '../../../types/state';

export const SelectErrors = (state: State) => state[NameSpace.Errors].errors;

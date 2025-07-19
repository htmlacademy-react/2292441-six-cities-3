import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { ErrorsData } from '../../../types/errors-data';
import { ServerError } from '../../../types/server-error';

const initialState: ErrorsData = {
  errors: [],
};

export const errorsData = createSlice({
  name: NameSpace.Errors,
  initialState,
  reducers: {
    addError: (state, action: PayloadAction<ServerError>) => {
      state.errors.push(action.payload);
    },
    removeError: (state) => {
      state.errors.shift();
    },
    clearErrors: (state) => {
      state.errors = [];
    }
  }
});

export const {addError, removeError, clearErrors} = errorsData.actions;

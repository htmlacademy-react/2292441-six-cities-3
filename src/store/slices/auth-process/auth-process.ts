import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../../const';
import { AuthProcess } from '../../../types/state';
import { checkAuth, login, logout } from '../../api-action';

const initialState: AuthProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  error: null,
};

export const authProcess = createSlice({
  name: NameSpace.Auth,
  initialState,
  reducers: {
    resetLoginError: (state) => {
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder.
      addCase(checkAuth.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      }).
      addCase(checkAuth.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      }).
      addCase(login.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      }).
      addCase(login.rejected, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        if (action.payload) {
          if ('details' in action.payload && action.payload.details.length) {
            state.error = action.payload.details[0].messages.join(' ');
          } else {
            state.error = action.payload.message;
          }
        }
      }).
      addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      });
  }
});

export const { resetLoginError } = authProcess.actions;

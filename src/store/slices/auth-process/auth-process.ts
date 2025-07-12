import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../../const';
import { AuthProcess } from '../../../types/state';
import { checkAuth, login, logout } from '../../api-action';

const initialState: AuthProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  hasError: false,
};

export const authProcess = createSlice({
  name: NameSpace.Auth,
  initialState,
  reducers: {},
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
      addCase(login.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.hasError = true;
      }).
      addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      });
  }
});

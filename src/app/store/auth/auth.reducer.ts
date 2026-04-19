import { createReducer, on } from '@ngrx/store';
import { login, loginFailure, loginSuccess, logout } from './auth.actions';
import { initialAuthState } from './auth.state';

export const authReducer = createReducer(
  initialAuthState,

  on(login, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),

  on(loginSuccess, (state, { user }) => ({
    ...state,
    user,
    isLoading: false,
    error: null,
  })),

  on(loginFailure, (state, { error }) => ({
    ...state,
    user: null,
    isLoading: false,
    error,
  })),

  on(logout, () => initialAuthState)
);

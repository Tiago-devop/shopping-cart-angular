import { createReducer, on } from '@ngrx/store';
import { hideLoading, showLoading } from './loading.actions';

export interface LoadingState {
  count: number;
}

export const initialLoadingState: LoadingState = { count: 0 };

export const loadingReducer = createReducer(
  initialLoadingState,
  on(showLoading, (state) => ({ count: state.count + 1 })),
  on(hideLoading, (state) => ({ count: Math.max(0, state.count - 1) }))
);

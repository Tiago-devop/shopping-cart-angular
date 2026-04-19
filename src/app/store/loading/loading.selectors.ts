import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoadingState } from './loading.reducer';
import { selectAuthLoading } from '../auth/auth.selectors';
import { selectProductsLoading } from '../products/products.selectors';

export const selectLoadingState = createFeatureSelector<LoadingState>('loading');

// Spinner HTTP (conta requisições ativas)
export const selectHttpLoading = createSelector(
  selectLoadingState,
  (state) => state.count > 0
);

// Spinner global = qualquer loading ativo (HTTP ou feature)
export const selectGlobalLoading = createSelector(
  selectHttpLoading,
  selectAuthLoading,
  selectProductsLoading,
  (http, auth, products) => http || auth || products
);

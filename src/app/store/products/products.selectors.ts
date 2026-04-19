import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.state';

export const selectProductsState =
  createFeatureSelector<ProductsState>('products');

export const selectAllProducts = createSelector(
  selectProductsState,
  (state) => state.items
);

export const selectProductsLoading = createSelector(
  selectProductsState,
  (state) => state.isLoading
);

export const selectProductsError = createSelector(
  selectProductsState,
  (state) => state.error
);

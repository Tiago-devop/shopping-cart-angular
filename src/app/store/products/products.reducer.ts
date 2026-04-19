import { createReducer, on } from '@ngrx/store';
import {
  addProduct,
  addProductSuccess,
  loadProducts,
  loadProductsFailure,
  loadProductsSuccess,
  removeProduct,
} from './products.actions';
import { initialProductsState } from './products.state';

export const productsReducer = createReducer(
  initialProductsState,

  on(loadProducts, (state) => ({ ...state, isLoading: true, error: null })),

  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    items: products,
    isLoading: false,
  })),

  on(loadProductsFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),

  on(addProduct, (state) => ({ ...state, isLoading: true })),

  on(addProductSuccess, (state, { product }) => ({
    ...state,
    items: [...state.items, product],
    isLoading: false,
  })),

  on(removeProduct, (state, { id }) => ({
    ...state,
    items: state.items.filter((p) => p.id !== id),
  }))
);

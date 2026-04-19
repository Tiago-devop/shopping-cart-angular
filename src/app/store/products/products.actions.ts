import { createAction, props } from '@ngrx/store';
import { Product } from './product.model';

export const loadProducts = createAction('[Products] Load Products');

export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: string }>()
);

export const addProduct = createAction(
  '[Products] Add Product',
  props<{ product: Omit<Product, 'id'> }>()
);

export const addProductSuccess = createAction(
  '[Products] Add Product Success',
  props<{ product: Product }>()
);

export const removeProduct = createAction(
  '[Products] Remove Product',
  props<{ id: string }>()
);

import { Product } from './product.model';

export interface ProductsState {
  items: Product[];
  isLoading: boolean;
  error: string | null;
}

export const initialProductsState: ProductsState = {
  items: [],
  isLoading: false,
  error: null,
};

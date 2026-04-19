import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, delay, map, switchMap } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import {
  addProduct,
  addProductSuccess,
  loadProducts,
  loadProductsFailure,
  loadProductsSuccess,
} from './products.actions';
import { Product } from './product.model';

const MOCK_PRODUCTS: Product[] = [
  {
    id: uuidv4(),
    name: 'Notebook Pro',
    description: 'Notebook de alta performance',
    price: 4999.99,
    imageUrl: 'https://placehold.co/300x200?text=Notebook',
    stock: 10,
  },
  {
    id: uuidv4(),
    name: 'Mouse Gamer',
    description: 'Mouse com 16000 DPI',
    price: 299.99,
    imageUrl: 'https://placehold.co/300x200?text=Mouse',
    stock: 25,
  },
  {
    id: uuidv4(),
    name: 'Teclado Mecânico',
    description: 'Teclado com switches blue',
    price: 450.0,
    imageUrl: 'https://placehold.co/300x200?text=Teclado',
    stock: 15,
  },
];

@Injectable()
export class ProductsEffects {
  private actions$ = inject(Actions);

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      switchMap(() =>
        of(MOCK_PRODUCTS).pipe(
          delay(800),
          map((products) => loadProductsSuccess({ products })),
          catchError(() =>
            of(loadProductsFailure({ error: 'Erro ao carregar produtos.' }))
          )
        )
      )
    )
  );

  addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addProduct),
      switchMap(({ product }) =>
        of({ ...product, id: uuidv4() } as Product).pipe(
          delay(600),
          map((newProduct) => addProductSuccess({ product: newProduct })),
          catchError(() =>
            of(loadProductsFailure({ error: 'Erro ao adicionar produto.' }))
          )
        )
      )
    )
  );

}

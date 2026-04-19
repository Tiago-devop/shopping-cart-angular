import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { addProduct } from '../../../store/products/products.actions';
import { selectProductsLoading } from '../../../store/products/products.selectors';
import { selectCurrentUser } from '../../../store/auth/auth.selectors';
import { logout } from '../../../store/auth/auth.actions';
import { User } from '../../../core/services/auth.service';
import { addProductSuccess } from '../../../store/products/products.actions';
import { Actions, ofType } from '@ngrx/effects';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent implements OnInit, OnDestroy {
  private store = inject(Store);
  private actions$ = inject(Actions);
  private destroy$ = new Subject<void>();

  isLoading$!: Observable<boolean>;
  currentUser$!: Observable<User | null>;
  successMessage = '';

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]),
    price: new FormControl<number | null>(null, [Validators.required, Validators.min(0.01)]),
    stock: new FormControl<number | null>(null, [Validators.required, Validators.min(0), Validators.max(9999)]),
    imageUrl: new FormControl('', [Validators.required, Validators.pattern(/^https?:\/\/.+/)]),
  });

  ngOnInit(): void {
    this.isLoading$ = this.store.select(selectProductsLoading);
    this.currentUser$ = this.store.select(selectCurrentUser);

    this.actions$.pipe(
      ofType(addProductSuccess),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.successMessage = 'Produto cadastrado com sucesso!';
      this.productForm.reset();
      setTimeout(() => (this.successMessage = ''), 3000);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get f() {
    return this.productForm.controls;
  }

  onSubmit(): void {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }
    const { name, description, price, stock, imageUrl } = this.productForm.value;
    this.store.dispatch(addProduct({
      product: {
        name: name!,
        description: description!,
        price: price!,
        stock: stock!,
        imageUrl: imageUrl!,
      },
    }));
  }

  onLogout(): void {
    this.store.dispatch(logout());
  }
}

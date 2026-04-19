import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../../store/products/product.model';
import { loadProducts } from '../../../store/products/products.actions';
import { selectAllProducts, selectProductsLoading } from '../../../store/products/products.selectors';
import { addToCart } from '../../../store/cart/cart.actions';
import { selectCartCount } from '../../../store/cart/cart.selectors';
import { selectCurrentUser } from '../../../store/auth/auth.selectors';
import { logout } from '../../../store/auth/auth.actions';
import { User } from '../../../core/services/auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  private store = inject(Store);

  products$!: Observable<Product[]>;
  isLoading$!: Observable<boolean>;
  cartCount$!: Observable<number>;
  currentUser$!: Observable<User | null>;

  ngOnInit(): void {
    this.products$ = this.store.select(selectAllProducts);
    this.isLoading$ = this.store.select(selectProductsLoading);
    this.cartCount$ = this.store.select(selectCartCount);
    this.currentUser$ = this.store.select(selectCurrentUser);
    this.store.dispatch(loadProducts());
  }

  addToCart(product: Product): void {
    this.store.dispatch(addToCart({ product }));
  }

  onLogout(): void {
    this.store.dispatch(logout());
  }

  trackByProduct(_: number, product: Product): string {
    return product.id;
  }
}

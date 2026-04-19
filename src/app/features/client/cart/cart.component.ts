import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItem } from '../../../store/cart/cart.state';
import { clearCart, removeFromCart, updateQuantity } from '../../../store/cart/cart.actions';
import { selectCartIsEmpty, selectCartItems, selectCartTotal } from '../../../store/cart/cart.selectors';
import { selectCurrentUser } from '../../../store/auth/auth.selectors';
import { logout } from '../../../store/auth/auth.actions';
import { User } from '../../../core/services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  private store = inject(Store);

  cartItems$!: Observable<CartItem[]>;
  cartTotal$!: Observable<number>;
  cartIsEmpty$!: Observable<boolean>;
  currentUser$!: Observable<User | null>;

  ngOnInit(): void {
    this.cartItems$ = this.store.select(selectCartItems);
    this.cartTotal$ = this.store.select(selectCartTotal);
    this.cartIsEmpty$ = this.store.select(selectCartIsEmpty);
    this.currentUser$ = this.store.select(selectCurrentUser);
  }

  removeItem(productId: string): void {
    this.store.dispatch(removeFromCart({ productId }));
  }

  updateQty(productId: string, quantity: number): void {
    this.store.dispatch(updateQuantity({ productId, quantity }));
  }

  clearCart(): void {
    this.store.dispatch(clearCart());
  }

  onLogout(): void {
    this.store.dispatch(logout());
  }

  trackByItem(_: number, item: CartItem): string {
    return item.product.id;
  }
}

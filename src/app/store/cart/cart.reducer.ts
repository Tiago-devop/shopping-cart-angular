import { createReducer, on } from '@ngrx/store';
import { addToCart, clearCart, removeFromCart, updateQuantity } from './cart.actions';
import { initialCartState } from './cart.state';

export const cartReducer = createReducer(
  initialCartState,

  on(addToCart, (state, { product }) => {
    const existing = state.items.find((i) => i.product.id === product.id);
    if (existing) {
      return {
        ...state,
        items: state.items.map((i) =>
          i.product.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
      };
    }
    return { ...state, items: [...state.items, { product, quantity: 1 }] };
  }),

  on(removeFromCart, (state, { productId }) => ({
    ...state,
    items: state.items.filter((i) => i.product.id !== productId),
  })),

  on(updateQuantity, (state, { productId, quantity }) => ({
    ...state,
    items: quantity <= 0
      ? state.items.filter((i) => i.product.id !== productId)
      : state.items.map((i) =>
          i.product.id === productId ? { ...i, quantity } : i
        ),
  })),

  on(clearCart, () => initialCartState)
);

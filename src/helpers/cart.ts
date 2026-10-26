import type { CartItem } from '../types';

export function getSubtotal(cart: CartItem[]) {
    return cart.reduce((sum, item) => sum + item.cents * item.quantity, 0);
}

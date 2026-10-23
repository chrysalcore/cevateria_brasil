import { createContext } from 'react';
import type { CartItem, Product } from '../types';

export type CartContextValue = {
    cart: CartItem[];
    count: number;
    addItem: (product: Product, quantity: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    removeItem: (id: number) => void;
};

export const CartContext = createContext<CartContextValue | null>(null);

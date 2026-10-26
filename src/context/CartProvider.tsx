import { useEffect, useMemo, useReducer } from 'react';

import { MAX_QUANTITY, MIN_QUANTITY, products } from '../data/products';
import { getSubtotal } from '../helpers/cart';
import { storedCartSchema } from '../schemas/storedCartSchema';
import type { CartItem, Product } from '../types';
import { CartContext } from './CartContext';

const STORAGE_KEY = 'cevateria:cart';

type Action =
    | { type: 'ADD'; payload: { product: Product; quantity: number } }
    | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
    | { type: 'REMOVE'; payload: { id: number } };

function clampQuantity(quantity: number) {
    return Math.max(MIN_QUANTITY, Math.min(MAX_QUANTITY, quantity));
}

function cartReducer(state: CartItem[], action: Action): CartItem[] {
    switch (action.type) {
        case 'ADD': {
            const { product, quantity } = action.payload;
            const existing = state.find((item) => item.id === product.id);
            if (!existing) return [...state, { ...product, quantity: clampQuantity(quantity) }];
            return state.map((item) =>
                item.id === product.id ? { ...item, quantity: clampQuantity(item.quantity + quantity) } : item,
            );
        }
        case 'UPDATE_QUANTITY':
            return state.map((item) =>
                item.id === action.payload.id ? { ...item, quantity: clampQuantity(action.payload.quantity) } : item,
            );
        case 'REMOVE':
            return state.filter((item) => item.id !== action.payload.id);
        default:
            return state;
    }
}

function loadCart(): CartItem[] {
    try {
        const result = storedCartSchema.safeParse(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]'));
        if (!result.success) return [];
        return result.data.flatMap(({ id, quantity }) => {
            const product = products.find((item) => item.id === id);
            return product ? [{ ...product, quantity: clampQuantity(quantity) }] : [];
        });
    } catch {
        return [];
    }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, dispatch] = useReducer(cartReducer, undefined, loadCart);

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(cart.map(({ id, quantity }) => ({ id, quantity }))));
        } catch {
            // Storage unavailable (private mode, full quota): the cart still works in memory.
        }
    }, [cart]);

    const value = useMemo(
        () => ({
            cart,
            count: cart.reduce((sum, item) => sum + item.quantity, 0),
            subtotal: getSubtotal(cart),
            addItem: (product: Product, quantity: number) => dispatch({ type: 'ADD', payload: { product, quantity } }),
            updateQuantity: (id: number, quantity: number) =>
                dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } }),
            removeItem: (id: number) => dispatch({ type: 'REMOVE', payload: { id } }),
        }),
        [cart],
    );

    return <CartContext value={value}>{children}</CartContext>;
}

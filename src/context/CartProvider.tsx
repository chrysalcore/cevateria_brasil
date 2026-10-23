import { useMemo, useReducer } from 'react';
import { MAX_QUANTITY, MIN_QUANTITY } from '../data/products';
import type { CartItem, Product } from '../types';
import { CartContext } from './CartContext';

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

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, dispatch] = useReducer(cartReducer, []);

    const value = useMemo(
        () => ({
            cart,
            count: cart.reduce((sum, item) => sum + item.quantity, 0),
            addItem: (product: Product, quantity: number) => dispatch({ type: 'ADD', payload: { product, quantity } }),
            updateQuantity: (id: number, quantity: number) =>
                dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } }),
            removeItem: (id: number) => dispatch({ type: 'REMOVE', payload: { id } }),
        }),
        [cart],
    );

    return <CartContext value={value}>{children}</CartContext>;
}

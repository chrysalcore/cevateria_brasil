import type { Product } from '../types';

export const products: Product[] = [
    { id: 1, name: 'Cápsula individual', capsules: 1, cents: 400 },
    { id: 2, name: 'Kit com 4 cápsulas', capsules: 4, cents: 1500 },
    { id: 3, name: 'Kit com 6 cápsulas', capsules: 6, cents: 2200 },
    { id: 4, name: 'Kit com 8 cápsulas', capsules: 8, cents: 2900 },
    { id: 5, name: 'Kit com 10 cápsulas', capsules: 10, cents: 3600 },
];

export const MIN_QUANTITY = 1;
export const MAX_QUANTITY = 99;

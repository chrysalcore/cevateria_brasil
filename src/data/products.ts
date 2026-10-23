import capsula from '../assets/images/capsula.webp';
import kit10 from '../assets/images/kit-10.webp';
import kit4 from '../assets/images/kit-4.webp';
import kit6 from '../assets/images/kit-6.webp';
import kit8 from '../assets/images/kit-8.webp';
import type { Product } from '../types';

export const products: Product[] = [
    { id: 1, name: 'Cápsula individual', capsules: 1, cents: 400, image: capsula, alt: 'Uma cápsula de cevada com chocolate' },
    { id: 2, name: 'Kit com 4 cápsulas', capsules: 4, cents: 1500, image: kit4, alt: 'Kit com 4 cápsulas de cevada com chocolate' },
    { id: 3, name: 'Kit com 6 cápsulas', capsules: 6, cents: 2200, image: kit6, alt: 'Kit com 6 cápsulas de cevada com chocolate' },
    { id: 4, name: 'Kit com 8 cápsulas', capsules: 8, cents: 2900, image: kit8, alt: 'Kit com 8 cápsulas de cevada com chocolate' },
    { id: 5, name: 'Kit com 10 cápsulas', capsules: 10, cents: 3600, image: kit10, alt: 'Kit com 10 cápsulas de cevada com chocolate' },
];

export const MIN_QUANTITY = 1;
export const MAX_QUANTITY = 99;

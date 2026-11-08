import capsula from '../assets/images/capsula.webp';
import kit4 from '../assets/images/kit-4.webp';
import kit6 from '../assets/images/kit-6.webp';
import kit8 from '../assets/images/kit-8.webp';
import kit10 from '../assets/images/kit-10.webp';
import type { Product } from '../types';

export const products: Product[] = [
    {
        id: 1,
        capsules: 1,
        cents: 400,
        image: capsula,
    },
    {
        id: 2,
        capsules: 4,
        cents: 1500,
        image: kit4,
    },
    {
        id: 3,
        capsules: 6,
        cents: 2200,
        image: kit6,
    },
    {
        id: 4,
        capsules: 8,
        cents: 2900,
        image: kit8,
    },
    {
        id: 5,
        capsules: 10,
        cents: 3600,
        image: kit10,
    },
];

export const MIN_QUANTITY = 1;
export const MAX_QUANTITY = 99;

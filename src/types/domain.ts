export interface Product {
    id: number;
    name: string;
    capsules: number;
    cents: number;
    image: string;
    alt: string;
}

export interface CartItem extends Product {
    quantity: number;
}

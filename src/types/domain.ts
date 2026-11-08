export interface Product {
    id: number;
    capsules: number;
    cents: number;
    image: string;
}

export interface CartItem extends Product {
    quantity: number;
}

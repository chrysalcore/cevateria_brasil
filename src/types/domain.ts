export interface Product {
    id: number;
    name: string;
    capsules: number;
    cents: number;
}

export interface CartItem extends Product {
    quantity: number;
}

import { WHATSAPP_NUMBER } from '../data/contact';
import type { CartItem } from '../types';
import { formatPrice } from './formatPrice';

export function whatsappUrl(message: string) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getSubtotal(cart: CartItem[]) {
    return cart.reduce((sum, item) => sum + item.cents * item.quantity, 0);
}

export function buildOrderMessage(cart: CartItem[], name: string, cep: string) {
    return [
        `Olá! ${name ? `Meu nome é ${name}. ` : ''}Gostaria de fazer um pedido na Cevateria Brasil.`,
        '',
        'Cevada com chocolate em cápsulas:',
        ...cart.map((item) => `${item.quantity} × ${item.name} — ${formatPrice(item.quantity * item.cents)}`),
        '',
        `Subtotal: ${formatPrice(getSubtotal(cart))} (sem frete).`,
        ...(cep ? [`CEP para entrega: ${cep}`] : []),
        'Podemos confirmar disponibilidade, compatibilidade, frete e formas de pagamento?',
    ].join('\n');
}

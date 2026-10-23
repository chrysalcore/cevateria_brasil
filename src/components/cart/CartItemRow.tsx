import { formatPrice } from '../../helpers/formatPrice';
import { useCart } from '../../hooks/useCart';
import type { CartItem } from '../../types';
import { QuantityControl } from '../global/QuantityControl';

export function CartItemRow({ item }: { item: CartItem }) {
    const { updateQuantity, removeItem } = useCart();

    return (
        <li className="flex items-center justify-between gap-4 border-b border-divider py-4">
            <div>
                <h3 className="text-sm font-medium">{item.name}</h3>
                <p className="mt-2 text-xs text-muted">
                    {formatPrice(item.cents)} cada · {formatPrice(item.cents * item.quantity)}
                </p>
                <button
                    type="button"
                    className="mt-2 cursor-pointer border-b border-divider text-xs text-muted transition hover:text-highlight"
                    aria-label={`Remover ${item.name}`}
                    onClick={() => removeItem(item.id)}
                >
                    Remover
                </button>
            </div>
            <QuantityControl value={item.quantity} label={item.name} onChange={(quantity) => updateQuantity(item.id, quantity)} />
        </li>
    );
}

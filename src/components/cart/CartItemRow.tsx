import { formatPrice } from '../../helpers/formatPrice';
import { useCart } from '../../hooks/useCart';
import { useI18n } from '../../hooks/useI18n';
import type { CartItem } from '../../types';
import { QuantityControl } from '../global/QuantityControl';

export function CartItemRow({ item }: { item: CartItem }) {
    const { t } = useI18n();
    const { updateQuantity, removeItem } = useCart();
    const name = t.product.name(item.capsules);

    return (
        <li className="flex items-center justify-between gap-4 border-b border-divider py-4">
            <div>
                <h3 className="text-sm font-medium">{name}</h3>
                <p className="mt-2 text-xs text-muted">
                    {formatPrice(item.cents)} {t.cart.each} · {formatPrice(item.cents * item.quantity)}
                </p>
                <button
                    type="button"
                    className="mt-2 cursor-pointer border-b border-divider text-xs text-muted transition hover:text-highlight"
                    aria-label={t.cart.removeLabel(name)}
                    onClick={() => removeItem(item.id)}
                >
                    {t.cart.remove}
                </button>
            </div>
            <QuantityControl
                value={item.quantity}
                label={name}
                onChange={(quantity) => updateQuantity(item.id, quantity)}
            />
        </li>
    );
}

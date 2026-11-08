import { products } from '../../../data/products';
import { formatPrice } from '../../../helpers/formatPrice';
import { useI18n } from '../../../hooks/useI18n';
import type { Product } from '../../../types';

export function ProductOptions({
    selected,
    onSelect,
    onPreview,
}: {
    selected: Product;
    onSelect: (product: Product) => void;
    onPreview: (product: Product | null) => void;
}) {
    const { t } = useI18n();

    return (
        <div
            role="group"
            aria-label={t.products.optionsLabel}
            className="mt-6 grid gap-2"
            onMouseLeave={() => onPreview(null)}
            onBlur={() => onPreview(null)}
        >
            {products.map((product) => (
                <button
                    key={product.id}
                    type="button"
                    aria-pressed={product.id === selected.id}
                    onClick={() => onSelect(product)}
                    onMouseEnter={() => onPreview(product)}
                    onFocus={() => onPreview(product)}
                    className="flex cursor-pointer items-center justify-between gap-3 rounded border border-control px-4 py-3.5 text-left text-sm transition hover:bg-surface aria-pressed:border-accent aria-pressed:bg-selected aria-pressed:shadow-[inset_3px_0_var(--color-accent)]"
                >
                    <span>{t.product.name(product.capsules)}</span>
                    <strong className="font-medium">{formatPrice(product.cents)}</strong>
                </button>
            ))}
        </div>
    );
}

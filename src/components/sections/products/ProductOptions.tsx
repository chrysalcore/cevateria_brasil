import { products } from '../../../data/products';
import { formatPrice } from '../../../helpers/formatPrice';
import type { Product } from '../../../types';

export function ProductOptions({ selected, onSelect }: { selected: Product; onSelect: (product: Product) => void }) {
    return (
        <div role="group" aria-label="Selecione uma opção" className="mt-6 grid gap-2">
            {products.map((product) => (
                <button
                    key={product.id}
                    type="button"
                    aria-pressed={product.id === selected.id}
                    onClick={() => onSelect(product)}
                    className="flex cursor-pointer items-center justify-between gap-3 rounded border border-control px-4 py-3.5 text-left text-sm transition hover:bg-surface aria-pressed:border-accent aria-pressed:bg-selected aria-pressed:shadow-[inset_3px_0_var(--color-accent)]"
                >
                    <span>{product.name}</span>
                    <strong className="font-medium">{formatPrice(product.cents)}</strong>
                </button>
            ))}
        </div>
    );
}

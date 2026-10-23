import { products } from '../../../data/products';
import type { Product } from '../../../types';

export function ProductGallery({ shown }: { shown: Product }) {
    const index = products.findIndex((product) => product.id === shown.id);

    return (
        <div className="relative h-88 overflow-hidden rounded bg-surface-strong md:h-144">
            <div
                className="flex h-full flex-col transition-transform duration-700 ease-smooth motion-reduce:transition-none"
                style={{ transform: `translateY(-${index * 100}%)` }}
            >
                {products.map((product) => (
                    <img
                        key={product.id}
                        src={product.image}
                        alt={product.alt}
                        aria-hidden={product.id !== shown.id}
                        width={600}
                        height={800}
                        loading="lazy"
                        className="h-full w-full shrink-0 object-cover"
                    />
                ))}
            </div>
            <span
                aria-hidden="true"
                className="absolute top-5 left-5 rounded-sm bg-page/95 px-3 py-2 text-xs tracking-wider uppercase"
            >
                {shown.name}
            </span>
            <small className="absolute right-3 bottom-2.5 text-[0.625rem] text-white [text-shadow:0_1px_4px_var(--color-ink)]">
                Imagem ilustrativa
            </small>
        </div>
    );
}

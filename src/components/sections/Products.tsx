import { useState } from 'react';

import { products } from '../../data/products';
import { formatPrice } from '../../helpers/formatPrice';
import { useCart } from '../../hooks/useCart';
import { useI18n } from '../../hooks/useI18n';
import { useReveal } from '../../hooks/useReveal';
import { useToast } from '../../hooks/useToast';
import type { Product } from '../../types';
import { Button } from '../global/Button';
import { Eyebrow } from '../global/Eyebrow';
import { QuantityControl } from '../global/QuantityControl';
import { Toast } from '../global/Toast';
import { ProductGallery } from './products/ProductGallery';
import { ProductOptions } from './products/ProductOptions';

export function Products() {
    const { t } = useI18n();
    const { addItem } = useCart();
    const { message, visible, showToast } = useToast();
    const [selected, setSelected] = useState<Product>(products[0]);
    const [preview, setPreview] = useState<Product | null>(null);
    const [quantity, setQuantity] = useState(1);
    const revealRef = useReveal<HTMLElement>();

    function handleAdd() {
        addItem(selected, quantity);
        showToast(t.products.added(t.product.name(selected.capsules)));
    }

    return (
        <>
            <section ref={revealRef} id="produtos" className="wrap pt-14 pb-24 *:reveal md:pt-20 md:pb-38">
                <div className="mb-7 md:mb-9 md:flex md:items-end md:justify-between">
                    <div>
                        <Eyebrow>{t.products.eyebrow}</Eyebrow>
                        <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight">{t.products.title}</h2>
                    </div>
                    <p className="mt-4 leading-relaxed text-muted md:mt-0">
                        {t.products.asideLines[0]}
                        <br className="hidden md:inline" /> {t.products.asideLines[1]}
                    </p>
                </div>

                <div className="grid items-center gap-7 md:grid-cols-[1.05fr_1fr] md:gap-9 lg:gap-20">
                    <ProductGallery shown={preview ?? selected} />

                    <div>
                        <Eyebrow>{t.products.chooseEyebrow}</Eyebrow>
                        <h3 className="mt-3 font-serif text-4xl leading-tight tracking-tight">
                            {t.products.chooseTitle}
                            <br className="hidden md:inline" /> <em>{t.products.chooseEmphasis}</em>
                        </h3>
                        <p className="mt-4 leading-relaxed text-muted md:max-w-md">{t.products.chooseIntro}</p>

                        <ProductOptions selected={selected} onSelect={setSelected} onPreview={setPreview} />

                        <div className="mt-5 mb-4 flex items-center justify-between">
                            <div>
                                <strong className="block font-serif text-3xl font-normal">
                                    {formatPrice(selected.cents)}
                                </strong>
                                <small className="text-xs text-muted">{t.product.unit(selected.capsules)}</small>
                            </div>
                            <QuantityControl value={quantity} label={t.products.quantityLabel} onChange={setQuantity} />
                        </div>

                        <Button wide onClick={handleAdd}>
                            {t.products.add}
                        </Button>
                        <small className="mt-3 block text-xs leading-relaxed text-muted">{t.products.note}</small>
                    </div>
                </div>
            </section>
            <Toast message={message} visible={visible} />
        </>
    );
}

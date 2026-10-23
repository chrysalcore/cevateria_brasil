import { useState } from 'react';
import { products } from '../../data/products';
import { formatPrice } from '../../helpers/formatPrice';
import { useCart } from '../../hooks/useCart';
import { useToast } from '../../hooks/useToast';
import type { Product } from '../../types';
import { Button } from '../global/Button';
import { Eyebrow } from '../global/Eyebrow';
import { QuantityControl } from '../global/QuantityControl';
import { Toast } from '../global/Toast';
import { ProductGallery } from './products/ProductGallery';
import { ProductOptions } from './products/ProductOptions';

export function Products() {
    const { addItem } = useCart();
    const { message, visible, showToast } = useToast();
    const [selected, setSelected] = useState<Product>(products[0]);
    const [preview, setPreview] = useState<Product | null>(null);
    const [quantity, setQuantity] = useState(1);

    function handleAdd() {
        addItem(selected, quantity);
        showToast(`${selected.name} no pedido. Confira em “Meu pedido”.`);
    }

    return (
        <section id="produtos" className="wrap py-14 md:pt-20 md:pb-24">
            <div className="mb-7 md:mb-9 md:flex md:items-end md:justify-between">
                <div>
                    <Eyebrow>Pequena cápsula, grande momento</Eyebrow>
                    <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight">Seu próximo sabor favorito.</h2>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted md:mt-0">
                    Uma para experimentar.
                    <br className="hidden md:inline" /> Um kit para se apaixonar.
                </p>
            </div>

            <div className="grid items-center gap-7 md:grid-cols-[1.05fr_1fr] md:gap-9 lg:gap-20">
                <ProductGallery shown={preview ?? selected} />

                <div>
                    <Eyebrow>Escolha sua pausa</Eyebrow>
                    <h3 className="mt-3 font-serif text-4xl leading-tight tracking-tight">
                        Um carinho.
                        <br className="hidden md:inline" /> <em>Vários momentos.</em>
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted md:max-w-sm">
                        Da primeira cápsula ao seu kit favorito: escolha a quantidade que combina com você.
                    </p>

                    <ProductOptions selected={selected} onSelect={setSelected} onPreview={setPreview} />

                    <div className="mt-5 mb-4 flex items-center justify-between">
                        <div>
                            <strong className="block font-serif text-3xl font-normal">{formatPrice(selected.cents)}</strong>
                            <small className="text-xs text-muted">
                                {selected.capsules === 1 ? '1 cápsula' : `${selected.capsules} cápsulas por kit`}
                            </small>
                        </div>
                        <QuantityControl value={quantity} label="quantidade" onChange={setQuantity} />
                    </div>

                    <Button wide onClick={handleAdd}>
                        Adicionar ao meu pedido
                    </Button>
                    <small className="mt-3 block text-xs leading-relaxed text-muted">
                        Frete e disponibilidade a combinar. Confirme a compatibilidade antes da compra.
                    </small>
                </div>
            </div>

            <Toast message={message} visible={visible} />
        </section>
    );
}

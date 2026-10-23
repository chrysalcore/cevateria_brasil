import { useEffect, useRef } from 'react';
import { useCart } from '../../hooks/useCart';
import { Eyebrow } from '../global/Eyebrow';
import { CartItemRow } from './CartItemRow';
import { CheckoutForm } from './CheckoutForm';
import { EmptyCart } from './EmptyCart';

export function CartDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
    const { cart } = useCart();
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (open && !dialog.open) dialog.showModal();
        if (!open && dialog.open) dialog.close();
    }, [open]);

    function handleExplore() {
        onClose();
        document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <dialog
            ref={dialogRef}
            aria-labelledby="cart-title"
            onClose={onClose}
            onClick={(event) => event.target === event.currentTarget && onClose()}
            className="m-auto max-h-[90dvh] w-[min(32.5rem,calc(100%-1.75rem))] rounded-lg border border-divider bg-page text-ink shadow-dialog"
        >
            <div className="px-5 py-6 md:p-8">
                <div className="flex items-center justify-between">
                    <Eyebrow>Sua próxima pausa</Eyebrow>
                    <button
                        type="button"
                        className="size-11 cursor-pointer text-3xl"
                        aria-label="Fechar meu pedido"
                        onClick={onClose}
                    >
                        ×
                    </button>
                </div>
                <h2 id="cart-title" className="mt-3 mb-6 font-serif text-3xl tracking-tight md:text-4xl">
                    Meu pedido
                </h2>
                {cart.length === 0 ? (
                    <EmptyCart onExplore={handleExplore} />
                ) : (
                    <>
                        <ul>
                            {cart.map((item) => (
                                <CartItemRow key={item.id} item={item} />
                            ))}
                        </ul>
                        <CheckoutForm />
                    </>
                )}
            </div>
        </dialog>
    );
}

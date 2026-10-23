import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { Wordmark } from '../global/Wordmark';

const links = [
    { href: '#produtos', label: 'Nossas cápsulas' },
    { href: '#essencia', label: 'Nossa essência' },
    { href: '#duvidas', label: 'Dúvidas frequentes' },
];

export function Header({ onOpenCart }: { onOpenCart: () => void }) {
    const { count } = useCart();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="wrap relative flex h-20 items-center justify-between gap-4 md:h-28 md:gap-8">
            <a href="#inicio" className="flex items-center gap-2" aria-label="Cevadas com Amor, início">
                <svg viewBox="0 0 40 50" aria-hidden="true" className="h-10 w-7 md:h-12 md:w-9" strokeWidth="1.3">
                    <path d="M20 46V6M20 15C8 15 7 7 9 4c9 1 11 6 11 11Zm0 8C32 23 33 15 31 12c-9 1-11 6-11 11Zm0 9C8 32 7 24 9 21c9 1 11 6 11 11Zm0 8c12 0 13-8 11-11-9 1-11 6-11 11Z" />
                </svg>
                <Wordmark />
            </a>

            <nav
                id="navigation"
                aria-label="Menu principal"
                className={`${menuOpen ? 'flex' : 'hidden'} absolute inset-x-0 top-full z-10 flex-col gap-6 border border-line bg-paper p-6 text-sm shadow-lg md:static md:flex md:flex-row md:gap-5 md:border-0 md:bg-transparent md:p-0 md:shadow-none lg:gap-8`}
            >
                {links.map(({ href, label }) => (
                    <a key={href} href={href} className="transition hover:text-accent" onClick={() => setMenuOpen(false)}>
                        {label}
                    </a>
                ))}
            </nav>

            <button
                type="button"
                className="ml-auto flex cursor-pointer items-center gap-2.5 rounded border border-edge px-3 py-2.5 text-sm transition hover:bg-sand md:ml-0 md:px-4 md:py-3"
                aria-label={`Abrir meu pedido, ${count} ${count === 1 ? 'item' : 'itens'}`}
                onClick={onOpenCart}
            >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" strokeWidth="1.3">
                    <path d="M5 7h14l1 14H4L5 7Zm3 0V5a4 4 0 0 1 8 0v2" />
                </svg>
                <span className="hidden lg:inline">Meu pedido</span>
                <b className="grid size-5 place-items-center rounded-full bg-ink text-xs font-medium text-paper">{count}</b>
            </button>

            <button
                type="button"
                className="size-11 cursor-pointer text-2xl md:hidden"
                aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-controls="navigation"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
            >
                ☰
            </button>
        </header>
    );
}

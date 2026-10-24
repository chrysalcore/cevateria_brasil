import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import logo from '../../assets/images/logo.webp';

const links = [
    { href: '#produtos', label: 'Nossas cápsulas' },
    { href: '#essencia', label: 'Nossa essência' },
    { href: '#como-funciona', label: 'Como funciona' },
    { href: '#duvidas', label: 'Dúvidas frequentes' },
];

export function Header({ onOpenCart }: { onOpenCart: () => void }) {
    const { count } = useCart();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="wrap relative flex h-20 items-center justify-between gap-4 md:h-28 md:gap-8">
            <a href="#inicio" className="shrink-0">
                <img src={logo} alt="Cevateria Brasil, início" width={189} height={192} className="size-16 md:size-22" />
            </a>

            <nav
                id="navigation"
                aria-label="Menu principal"
                className={`${menuOpen ? 'flex' : 'hidden'} absolute inset-x-0 top-full z-10 flex-col gap-6 border border-divider bg-page p-6 text-sm shadow-lg md:static md:flex md:flex-row md:gap-5 md:border-0 md:bg-transparent md:p-0 md:shadow-none lg:gap-8`}
            >
                {links.map(({ href, label }) => (
                    <a key={href} href={href} className="relative w-fit transition after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-highlight after:transition-transform after:duration-300 after:ease-smooth hover:text-highlight hover:after:scale-x-100"
                        onClick={() => setMenuOpen(false)}
                    >
                        {label}
                    </a>
                ))}
            </nav>

            <button
                type="button"
                className="ml-auto flex cursor-pointer items-center gap-2.5 rounded border border-control px-3 py-2.5 text-sm transition hover:bg-surface md:ml-0 md:px-4 md:py-3"
                aria-label={`Abrir meu pedido, ${count} ${count === 1 ? 'item' : 'itens'}`}
                onClick={onOpenCart}
            >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" strokeWidth="1.3">
                    <path d="M5 7h14l1 14H4L5 7Zm3 0V5a4 4 0 0 1 8 0v2" />
                </svg>
                <span className="hidden lg:inline">Meu pedido</span>
                <b key={count} className="grid size-5 motion-safe:animate-bump place-items-center rounded-full bg-ink text-xs font-medium text-page">{count}</b>
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

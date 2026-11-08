import { useState } from 'react';

import logo from '../../assets/images/logo.webp';
import { languages, locales } from '../../data/i18n';
import { useCart } from '../../hooks/useCart';
import { useI18n } from '../../hooks/useI18n';
import { Icon } from '../global/Icon';

export function Header({ onOpenCart }: { onOpenCart: () => void }) {
    const { locale, t } = useI18n();
    const { count } = useCart();
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { href: '#produtos', label: t.header.nav.products },
        { href: '#essencia', label: t.header.nav.essence },
        { href: '#como-funciona', label: t.header.nav.howItWorks },
        { href: '#duvidas', label: t.header.nav.faq },
    ];
    const otherLocales = locales.filter((other) => other !== locale);

    return (
        <header className="relative wrap flex h-20 items-center justify-between gap-4 md:h-28 md:gap-8">
            <a href="#inicio" className="shrink-0">
                <img src={logo} alt={t.header.logoAlt} width={189} height={192} className="size-16 md:size-22" />
            </a>

            <nav
                id="navigation"
                aria-label={t.header.navLabel}
                className={`${menuOpen ? 'flex' : 'hidden'} absolute inset-x-0 top-full z-10 flex-col gap-6 border border-divider bg-page p-6 text-sm shadow-lg md:static md:flex md:flex-row md:gap-5 md:border-0 md:bg-transparent md:p-0 md:shadow-none lg:gap-8`}
            >
                {links.map(({ href, label }) => (
                    <a key={href} href={href} className="nav-link" onClick={() => setMenuOpen(false)}>
                        {label}
                    </a>
                ))}
            </nav>

            <div className="ml-auto flex items-center gap-1 md:ml-0 md:gap-2">
                {otherLocales.map((other) => (
                    <a
                        key={other}
                        href={`${import.meta.env.BASE_URL}${languages[other].path}`}
                        hrefLang={other}
                        lang={other}
                        aria-label={languages[other].name}
                        className="grid size-11 shrink-0 place-items-center text-sm font-medium transition hover:text-highlight"
                    >
                        {languages[other].code}
                    </a>
                ))}

                <button
                    type="button"
                    className="flex cursor-pointer items-center gap-2.5 rounded border border-control px-3 py-2.5 text-sm transition hover:bg-surface md:px-4 md:py-3"
                    aria-label={t.header.openCart(count)}
                    onClick={onOpenCart}
                >
                    <Icon name="bag" />
                    <span className="hidden lg:inline">{t.header.myOrder}</span>
                    <b
                        key={count}
                        className="grid size-5 place-items-center rounded-full bg-ink text-xs font-medium text-page motion-safe:animate-bump"
                    >
                        {count}
                    </b>
                </button>
            </div>

            <button
                type="button"
                className="grid size-11 cursor-pointer place-items-center md:hidden"
                aria-label={menuOpen ? t.header.closeMenu : t.header.openMenu}
                aria-controls="navigation"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
            >
                <Icon name={menuOpen ? 'close' : 'menu'} className="size-6" />
            </button>
        </header>
    );
}

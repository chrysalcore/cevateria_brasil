import logo from '../../assets/images/logo.webp';

export function Footer() {
    return (
        <footer className="wrap grid grid-cols-2 items-center gap-x-2.5 gap-y-6 py-9 md:flex md:flex-wrap md:justify-between md:gap-8 md:py-12">
            <a href="#inicio">
                <img src={logo} alt="Cevateria Brasil, início" width={189} height={192} loading="lazy" className="size-16" />
            </a>
            <p className="text-xs leading-relaxed text-muted">
                Cápsulas de cevada com chocolate.
                <br />
                Pequenas pausas, bons momentos.
            </p>
            <a href="#duvidas" className="text-xs transition hover:text-accent">
                Dúvidas frequentes ↗
            </a>
            <small className="text-right text-xs text-muted">© {new Date().getFullYear()} Cevadas com Amor</small>
        </footer>
    );
}

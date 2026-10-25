import logo from '../../assets/images/logo.webp';
import { Icon } from '../global/Icon';
import { WaveDivider } from '../global/WaveDivider';

export function Footer() {
    return (
        <footer className="relative bg-surface">
            <WaveDivider className="text-surface" />
            <div className="wrap grid grid-cols-2 items-center gap-x-2.5 gap-y-6 pt-14 pb-10 md:flex md:flex-wrap md:justify-between md:gap-8 md:pt-20 md:pb-14">
                <a href="#inicio">
                    <img src={logo} alt="Cevateria Brasil, início" width={189} height={192} loading="lazy" className="size-16" />
                </a>
                <p className="text-sm leading-relaxed text-muted">
                    Cápsulas de cevada com chocolate.
                    <br />
                    Pequenas pausas, bons momentos.
                </p>
                <a href="#duvidas" className="inline-flex items-center gap-1.5 text-sm transition hover:text-highlight">
                    Dúvidas frequentes
                    <Icon name="arrow-up-right" className="size-4" />
                </a>
                <small className="text-right text-xs leading-relaxed text-muted">
                    © {new Date().getFullYear()} Cevateria Brasil. Todos os direitos reservados.
                    <br />
                    Desenvolvido por{' '}
                    <a
                        href="https://chrysalcore.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-ink underline underline-offset-2 transition hover:text-highlight"
                    >
                        Chrysal Core
                    </a>
                </small>
            </div>
        </footer>
    );
}

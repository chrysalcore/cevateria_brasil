import logo from '../../assets/images/logo.webp';
import { useI18n } from '../../hooks/useI18n';
import { Icon } from '../global/Icon';
import { WaveDivider } from '../global/WaveDivider';

export function Footer() {
    const { t } = useI18n();

    return (
        <footer className="relative bg-surface">
            <WaveDivider className="text-surface" />
            <div className="wrap grid grid-cols-2 items-center gap-x-2.5 gap-y-6 pt-14 pb-10 md:flex md:flex-wrap md:justify-between md:gap-8 md:pt-20 md:pb-14">
                <a href="#inicio">
                    <img
                        src={logo}
                        alt={t.header.logoAlt}
                        width={189}
                        height={192}
                        loading="lazy"
                        className="size-16"
                    />
                </a>
                <p className="text-sm leading-relaxed text-muted">
                    {t.footer.taglineLines[0]}
                    <br />
                    {t.footer.taglineLines[1]}
                </p>
                <a href="#duvidas" className="inline-flex items-center gap-1.5 text-sm transition hover:text-highlight">
                    {t.footer.faq}
                    <Icon name="arrow-up-right" className="size-4" />
                </a>
                <small className="text-right text-xs leading-relaxed text-muted">
                    © {new Date().getFullYear()} Cevateria Brasil. {t.footer.rights}
                    <br />
                    {t.footer.developedBy}{' '}
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

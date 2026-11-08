import pedido from '../../assets/images/pedido.webp';
import { useI18n } from '../../hooks/useI18n';
import { useReveal } from '../../hooks/useReveal';
import { ArchImage } from '../global/ArchImage';
import { Eyebrow } from '../global/Eyebrow';
import { WaveDivider } from '../global/WaveDivider';

export function HowItWorks() {
    const { t } = useI18n();
    const revealRef = useReveal<HTMLDivElement>();

    return (
        <section id="como-funciona" className="relative bg-surface">
            <WaveDivider className="text-surface" />
            <div
                ref={revealRef}
                className="wrap grid items-center gap-8 pt-20 pb-16 *:reveal md:grid-cols-2 md:gap-10 md:pt-28 md:pb-24 lg:gap-20"
            >
                <div>
                    <Eyebrow>{t.howItWorks.eyebrow}</Eyebrow>
                    <h2 className="mt-4 mb-8 font-serif text-4xl leading-tight tracking-tight">
                        {t.howItWorks.titleStart}
                        <br className="hidden md:inline" /> {t.howItWorks.titleEnd}{' '}
                        <em>{t.howItWorks.titleEmphasis}</em>
                    </h2>
                    <ol>
                        {t.howItWorks.steps.map(({ title, description }, index) => (
                            <li
                                key={title}
                                className="flex gap-5 border-b border-divider py-5 first:pt-0 last:border-0 last:pb-0 md:gap-6"
                            >
                                <span className="font-serif text-2xl text-highlight italic">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div>
                                    <h3 className="font-medium">{title}</h3>
                                    <p className="mt-1 leading-relaxed text-muted">{description}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
                <ArchImage
                    src={pedido}
                    alt={t.howItWorks.imageAlt}
                    width={1024}
                    height={1024}
                    className="md:order-first"
                />
            </div>
        </section>
    );
}

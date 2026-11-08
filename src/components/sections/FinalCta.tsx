import { useI18n } from '../../hooks/useI18n';
import { useReveal } from '../../hooks/useReveal';
import { Button } from '../global/Button';
import { Icon } from '../global/Icon';
import { WaveDivider } from '../global/WaveDivider';

export function FinalCta() {
    const { t } = useI18n();
    const revealRef = useReveal<HTMLDivElement>();

    return (
        <section className="relative band-dark pt-20 pb-30 text-center md:pt-28 md:pb-46">
            <WaveDivider className="text-accent" />
            <div ref={revealRef} className="wrap *:reveal">
                <Icon name="heart" className="mx-auto mb-3 size-9 text-highlight-soft" />
                <h2 className="font-serif text-4xl leading-tight tracking-tight lg:text-5xl">
                    {t.finalCta.titleStart}
                    <br /> {t.finalCta.titleEnd} <em>{t.finalCta.titleEmphasis}</em>
                </h2>
                <div className="mt-6">
                    <Button href="#produtos" variant="light">
                        {t.finalCta.cta}
                    </Button>
                </div>
                <p className="mt-4 text-xs opacity-75">{t.finalCta.note}</p>
            </div>
        </section>
    );
}

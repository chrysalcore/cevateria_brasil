import { QUESTION_MESSAGE } from '../../data/contact';
import { whatsappUrl } from '../../helpers/whatsapp';
import { useI18n } from '../../hooks/useI18n';
import { useReveal } from '../../hooks/useReveal';
import { Eyebrow } from '../global/Eyebrow';
import { Icon } from '../global/Icon';
import { TextLink } from '../global/TextLink';

export function Faq() {
    const { t } = useI18n();
    const revealRef = useReveal<HTMLElement>();

    return (
        <section
            ref={revealRef}
            id="duvidas"
            className="wrap grid gap-6 pt-12 pb-22 *:reveal md:grid-cols-[1fr_1.35fr] md:gap-10 md:pt-20 md:pb-38 lg:gap-16"
        >
            <div>
                <Eyebrow>{t.faq.eyebrow}</Eyebrow>
                <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight">
                    {t.faq.titleStart}
                    <br className="hidden md:inline" /> {t.faq.titleEnd} <em>{t.faq.titleEmphasis}</em>
                </h2>
                <TextLink href={whatsappUrl(QUESTION_MESSAGE)} external>
                    {t.faq.contact}
                </TextLink>
            </div>
            <div>
                {t.faq.items.map(({ question, answer }) => (
                    <details key={question} className="group border-b border-divider">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 leading-relaxed">
                            {question}
                            <Icon name="plus" className="size-5 shrink-0 text-muted transition group-open:rotate-45" />
                        </summary>
                        <p className="pr-8 pb-5 leading-relaxed text-muted">{answer}</p>
                    </details>
                ))}
            </div>
        </section>
    );
}

import { QUESTION_MESSAGE } from '../../data/contact';
import { faq } from '../../data/faq';
import { whatsappUrl } from '../../helpers/whatsapp';
import { Eyebrow } from '../global/Eyebrow';
import { TextLink } from '../global/TextLink';

export function Faq() {
    return (
        <section id="duvidas" className="wrap grid gap-6 py-12 md:grid-cols-[1fr_1.35fr] md:gap-10 md:py-20 lg:gap-16">
            <div>
                <Eyebrow>Podemos ajudar?</Eyebrow>
                <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight">
                    Antes da
                    <br className="hidden md:inline" /> primeira <em>pausa.</em>
                </h2>
                <TextLink href={whatsappUrl(QUESTION_MESSAGE)} external arrow="↗">
                    Converse com a gente
                </TextLink>
            </div>
            <div>
                {faq.map(({ question, answer }) => (
                    <details key={question} className="group border-b border-line">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-sm leading-relaxed">
                            {question}
                            <span aria-hidden="true" className="text-xl text-muted transition group-open:rotate-45">
                                +
                            </span>
                        </summary>
                        <p className="pr-8 pb-5 text-sm leading-relaxed text-muted">{answer}</p>
                    </details>
                ))}
            </div>
        </section>
    );
}

import { Eyebrow } from '../global/Eyebrow';
import { TextLink } from '../global/TextLink';

export function Essence() {
    return (
        <section id="essencia" className="bg-surface py-12 md:py-18">
            <div className="wrap grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-10 lg:gap-24">
                <div
                    aria-hidden="true"
                    className="relative mx-auto flex min-h-64 w-full max-w-64 flex-col items-center justify-center rounded-t-arch border border-highlight-soft/60 before:absolute before:inset-3 before:rounded-[inherit] before:border before:border-highlight-soft/30 md:min-h-82 md:max-w-82"
                >
                    <svg viewBox="0 0 120 160" className="h-24 w-20 -rotate-12 text-highlight-soft md:h-32 md:w-24" strokeWidth="1.2">
                        <path d="M58 153 67 12M64 39C30 36 24 16 30 8c29 4 34 14 34 31Zm-2 27c37 0 43-23 38-32-30 3-37 16-38 32Zm-2 26C25 86 20 65 26 56c29 5 34 18 34 36Zm-2 28c34-1 42-23 38-33-29 1-37 15-38 33Z" />
                    </svg>
                    <i className="mt-4 text-center font-serif text-xl leading-normal md:text-2xl">
                        um pouco de calma,
                        <br />
                        uma dose de carinho.
                    </i>
                </div>
                <div>
                    <Eyebrow>Nossa essência</Eyebrow>
                    <h2 className="mt-4 mb-6 font-serif text-4xl leading-tight tracking-tight">
                        A vida acontece
                        <br className="hidden md:inline" /> entre <em>uma pausa e outra.</em>
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-loose text-muted">
                        A primeira conversa da manhã. A companhia de um bom livro. Aquele respiro no meio da tarde.
                        Acreditamos que os momentos simples merecem um sabor especial.
                    </p>
                    <p className="mt-3 max-w-md text-sm leading-loose text-muted">
                        É por isso que cevada e chocolate se encontram por aqui: para convidar você a desacelerar e
                        saborear o agora.
                    </p>
                    <TextLink href="#produtos">Conheça essa combinação</TextLink>
                </div>
            </div>
        </section>
    );
}

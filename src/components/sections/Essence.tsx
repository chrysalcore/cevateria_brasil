import leitura from '../../assets/images/leitura.webp';
import { useReveal } from '../../hooks/useReveal';
import { ArchImage } from '../global/ArchImage';
import { Eyebrow } from '../global/Eyebrow';
import { TextLink } from '../global/TextLink';
import { WaveDivider } from '../global/WaveDivider';

export function Essence() {
    const revealRef = useReveal<HTMLDivElement>();

    return (
        <section id="essencia" className="relative band-dark pt-20 pb-30 md:pt-28 md:pb-46">
            <WaveDivider className="text-accent" />
            <div
                ref={revealRef}
                className="wrap grid items-center gap-8 *:reveal md:grid-cols-[0.9fr_1.1fr] md:gap-10 lg:gap-24"
            >
                <ArchImage
                    src={leitura}
                    alt="Pessoa lendo um livro junto à janela, com uma xícara quente e duas cápsulas ao lado"
                    width={896}
                    height={1200}
                    size="compact"
                >
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-3 rounded-[inherit] border border-on-dark/70"
                    />
                    <i className="absolute inset-x-6 bottom-6 rounded-sm bg-page/95 px-4 py-3 text-center font-serif text-lg leading-normal text-ink">
                        um pouco de calma,
                        <br />
                        uma dose de carinho.
                    </i>
                </ArchImage>
                <div>
                    <Eyebrow>Nossa essência</Eyebrow>
                    <h2 className="mt-4 mb-6 font-serif text-4xl leading-tight tracking-tight">
                        A vida acontece
                        <br className="hidden md:inline" /> entre <em>uma pausa e outra.</em>
                    </h2>
                    <p className="mt-4 max-w-md leading-relaxed text-on-dark/80">
                        A primeira conversa da manhã. A companhia de um bom livro. Aquele respiro no meio da tarde.
                        Acreditamos que os momentos simples merecem um sabor especial.
                    </p>
                    <p className="mt-4 max-w-md leading-relaxed text-on-dark/80">
                        É por isso que cevada e chocolate se encontram por aqui: para convidar você a desacelerar e
                        saborear o agora.
                    </p>
                    <TextLink href="#produtos" variant="light">
                        Conheça essa combinação
                    </TextLink>
                </div>
            </div>
        </section>
    );
}

import bombons from '../../assets/images/bombons.webp';
import { Button } from '../global/Button';
import { Eyebrow } from '../global/Eyebrow';

export function Hero() {
    return (
        <section id="inicio" className="wrap grid items-center gap-9 pt-3 pb-9 md:grid-cols-[1fr_1.08fr] md:gap-6 md:pt-6 md:pb-16 lg:gap-12">
            <div className="md:py-4">
                <Eyebrow line>Um novo ritual de sabor</Eyebrow>
                <h1 className="my-6 font-serif text-6xl leading-[1.05] tracking-tight lg:text-7xl">
                    Uma pausa.
                    <br />
                    Um abraço.
                    <br />
                    <em>
                        Cevada com
                        <br className="hidden md:inline" /> chocolate.
                    </em>
                </h1>
                <p className="max-w-sm text-sm leading-loose text-muted">
                    O encontro do sabor da cevada com o carinho do chocolate. Em cápsulas, para fazer dos pequenos
                    momentos a melhor parte do dia.
                </p>
                <div className="mt-6 md:mt-8">
                    <Button href="#produtos">Encontre sua próxima pausa</Button>
                </div>
                <p className="mt-5 flex items-center gap-2 text-xs text-muted">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" strokeWidth="1.3">
                        <path d="M4 8h13v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Zm13 1h2a3 3 0 0 1 0 6h-2M7 3v2m5-2v2M2 23h19" />
                    </svg>
                    Sabor que acolhe. Praticidade que acompanha.
                </p>
            </div>

            <div className="relative ml-3 h-104 rounded-t-arch rounded-b bg-surface-strong md:ml-0 md:h-128 lg:h-144">
                <img
                    src={bombons}
                    alt="Tigela com bombons embrulhados em papel dourado e cartão “Feito com muito amor”"
                    width={960}
                    height={1280}
                    fetchPriority="high"
                    className="size-full rounded-[inherit] object-cover"
                />
                <div className="absolute top-6 -left-5 flex size-24 -rotate-12 flex-col items-center justify-center gap-1.5 rounded-full border-4 border-page bg-on-dark md:-left-6 lg:top-7 lg:-left-10 lg:size-28">
                    <span aria-hidden="true" className="font-serif text-4xl leading-none">
                        ♡
                    </span>
                    <small className="text-center text-[0.5rem] leading-relaxed tracking-widest">
                        FEITO DE PAUSAS
                        <br />E BONS MOMENTOS
                    </small>
                </div>
                <div className="absolute bottom-8 left-5 flex flex-col gap-1.5 rounded-sm bg-page/95 px-4 py-3 md:left-7 md:bottom-9 md:px-5 md:py-4">
                    <span className="text-xs tracking-widest">CEVADA + CHOCOLATE</span>
                    <i className="font-serif text-lg">Um encontro cheio de sabor.</i>
                </div>
                <small className="absolute right-3 bottom-2.5 text-[0.625rem] text-white [text-shadow:0_1px_4px_var(--color-ink)]">
                    Imagem ilustrativa
                </small>
            </div>
        </section>
    );
}

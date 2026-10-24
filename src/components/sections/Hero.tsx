import ritual from '../../assets/images/ritual.webp';
import { Button } from '../global/Button';
import { Eyebrow } from '../global/Eyebrow';
import { ImageBackdrop } from '../global/ImageBackdrop';

export function Hero() {
    return (
        <section id="inicio" className="relative isolate overflow-hidden">
            <div className="wrap pt-3 pb-9 md:flex md:min-h-144 md:items-center md:py-16 lg:min-h-160">
                <div className="md:w-1/2 md:pr-8 lg:w-5/12">
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
            </div>

            <ImageBackdrop
                src={ritual}
                alt="Xícara de bebida quente sobre a mesa de madeira, ao lado de uma tigela com cápsulas douradas"
                width={896}
                height={1200}
                side="right"
                priority
            >
                <div className="absolute bottom-8 left-5 flex flex-col gap-1.5 rounded-sm bg-page/95 px-4 py-3 md:right-6 md:bottom-10 md:left-auto md:px-5 md:py-4 lg:right-12">
                    <span className="text-xs tracking-widest">CEVADA + CHOCOLATE</span>
                    <i className="font-serif text-lg">Um encontro cheio de sabor.</i>
                </div>
                <small className="absolute right-3 bottom-2.5 text-[0.625rem] text-white [text-shadow:0_1px_4px_var(--color-ink)]">
                    Imagem ilustrativa
                </small>
            </ImageBackdrop>
        </section>
    );
}

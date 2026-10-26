import ritual from '../../assets/images/ritual.webp';
import { QUESTION_MESSAGE } from '../../data/contact';
import { products } from '../../data/products';
import { formatPrice } from '../../helpers/formatPrice';
import { whatsappUrl } from '../../helpers/whatsapp';
import { ArchImage } from '../global/ArchImage';
import { Button } from '../global/Button';
import { Eyebrow } from '../global/Eyebrow';
import { Icon } from '../global/Icon';

const bestValue = products.reduce((best, product) =>
    product.cents / product.capsules < best.cents / best.capsules ? product : best,
);

export function Hero() {
    return (
        <section
            id="inicio"
            className="wrap grid items-center gap-9 pt-3 pb-9 md:grid-cols-[1fr_1.08fr] md:gap-6 md:py-16 lg:gap-12"
        >
            <div>
                <Eyebrow line>Um novo ritual de sabor</Eyebrow>
                <h1 className="my-5 animate-enter font-serif text-5xl leading-[1.05] tracking-tight md:my-6 md:text-6xl lg:text-7xl">
                    Uma pausa.
                    <br />
                    Um abraço.
                    <br />
                    <em>
                        Cevada com
                        <br className="hidden md:inline" /> chocolate.
                    </em>
                </h1>
                <p className="max-w-md animate-enter text-base leading-relaxed text-muted enter-delay-150">
                    O encontro do sabor da cevada com o carinho do chocolate. Em cápsulas, para fazer dos pequenos
                    momentos a melhor parte do dia.
                </p>
                <div className="mt-6 grid animate-enter gap-3 enter-delay-300 sm:flex sm:flex-wrap md:mt-8">
                    <Button href="#produtos">Encontre sua próxima pausa</Button>
                    <Button href={whatsappUrl(QUESTION_MESSAGE)} external variant="outline">
                        Falar no WhatsApp
                    </Button>
                </div>
                <p className="mt-5 flex animate-enter items-center gap-2 text-sm text-muted enter-delay-450">
                    <Icon name="cup" className="size-4" />
                    <span>
                        A partir de{' '}
                        <strong className="font-medium text-ink">
                            {formatPrice(Math.round(bestValue.cents / bestValue.capsules))}
                        </strong>{' '}
                        por cápsula no {bestValue.name.toLowerCase()}
                    </span>
                </p>
            </div>

            <ArchImage
                src={ritual}
                alt="Xícara de bebida quente sobre a mesa de madeira, ao lado de uma tigela com cápsulas douradas"
                width={896}
                height={1200}
                priority
            >
                <div className="absolute bottom-8 left-5 flex animate-enter flex-col gap-1.5 rounded-sm bg-page/95 px-4 py-3 enter-delay-600 md:bottom-9 md:left-7 md:px-5 md:py-4">
                    <span className="text-xs tracking-widest">CEVADA + CHOCOLATE</span>
                    <i className="font-serif text-lg">Um encontro cheio de sabor.</i>
                </div>
                <small className="absolute right-3 bottom-2.5 text-[0.625rem] text-white [text-shadow:0_1px_4px_var(--color-ink)]">
                    Imagem ilustrativa
                </small>
            </ArchImage>
        </section>
    );
}

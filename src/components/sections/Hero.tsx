import ritual from '../../assets/images/ritual.webp';
import { QUESTION_MESSAGE } from '../../data/contact';
import { products } from '../../data/products';
import { formatPrice } from '../../helpers/formatPrice';
import { whatsappUrl } from '../../helpers/whatsapp';
import { useI18n } from '../../hooks/useI18n';
import { ArchImage } from '../global/ArchImage';
import { Button } from '../global/Button';
import { Eyebrow } from '../global/Eyebrow';
import { Icon } from '../global/Icon';

const bestValue = products.reduce((best, product) =>
    product.cents / product.capsules < best.cents / best.capsules ? product : best,
);

export function Hero() {
    const { t } = useI18n();

    return (
        <section
            id="inicio"
            className="wrap grid items-center gap-9 pt-3 pb-9 md:grid-cols-[1fr_1.08fr] md:gap-6 md:py-16 lg:gap-12"
        >
            <div>
                <Eyebrow line>{t.hero.eyebrow}</Eyebrow>
                <h1 className="my-5 animate-enter font-serif text-5xl leading-[1.05] tracking-tight md:my-6 md:text-6xl lg:text-7xl">
                    {t.hero.titleLines[0]}
                    <br />
                    {t.hero.titleLines[1]}
                    <br />
                    <em>
                        {t.hero.titleEmphasis[0]}
                        <br className="hidden md:inline" /> {t.hero.titleEmphasis[1]}
                    </em>
                </h1>
                <p className="max-w-md animate-enter text-base leading-relaxed text-muted enter-delay-150">
                    {t.hero.intro}
                </p>
                <div className="mt-6 grid animate-enter gap-3 enter-delay-300 sm:flex sm:flex-wrap md:mt-8">
                    <Button href="#produtos">{t.hero.cta}</Button>
                    <Button href={whatsappUrl(QUESTION_MESSAGE)} external variant="outline">
                        {t.hero.whatsapp}
                    </Button>
                </div>
                <p className="mt-5 flex animate-enter items-center gap-2 text-sm text-muted enter-delay-450">
                    <Icon name="cup" className="size-4" />
                    <span>
                        {t.hero.priceFrom}{' '}
                        <strong className="font-medium text-ink">
                            {formatPrice(Math.round(bestValue.cents / bestValue.capsules))}
                        </strong>{' '}
                        {t.hero.pricePer(t.product.name(bestValue.capsules))}
                    </span>
                </p>
            </div>

            <ArchImage src={ritual} alt={t.hero.imageAlt} width={896} height={1200} priority>
                <div className="absolute bottom-8 left-5 flex animate-enter flex-col gap-1.5 rounded-sm bg-page/95 px-4 py-3 enter-delay-600 md:bottom-9 md:left-7 md:px-5 md:py-4">
                    <span className="text-xs tracking-widest">{t.hero.badge}</span>
                    <i className="font-serif text-lg">{t.hero.badgeQuote}</i>
                </div>
                <small className="absolute right-3 bottom-2.5 text-[0.625rem] text-white [text-shadow:0_1px_4px_var(--color-ink)]">
                    {t.illustrative}
                </small>
            </ArchImage>
        </section>
    );
}

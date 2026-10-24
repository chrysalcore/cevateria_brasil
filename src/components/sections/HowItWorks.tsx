import pedido from '../../assets/images/pedido.webp';
import { steps } from '../../data/steps';
import { ArchImage } from '../global/ArchImage';
import { Eyebrow } from '../global/Eyebrow';
import { useReveal } from '../../hooks/useReveal';

export function HowItWorks() {
    const revealRef = useReveal<HTMLDivElement>();

    return (
        <section id="como-funciona" className="bg-surface">
            <div
                ref={revealRef}
                className="wrap grid items-center gap-8 py-12 *:reveal md:grid-cols-2 md:gap-10 md:py-20 lg:gap-20"
            >
                <div>
                    <Eyebrow>Do seu jeito, sem complicação</Eyebrow>
                    <h2 className="mt-4 mb-8 font-serif text-4xl leading-tight tracking-tight">
                        Seu pedido começa
                        <br className="hidden md:inline" /> com um <em>olá.</em>
                    </h2>
                    <ol>
                        {steps.map(({ title, description }, index) => (
                            <li
                                key={title}
                                className="flex gap-5 border-b border-divider py-5 first:pt-0 last:border-0 last:pb-0 md:gap-6"
                            >
                                <span className="font-serif text-2xl text-highlight italic">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div>
                                    <h3 className="text-sm font-medium">{title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
                <ArchImage
                    src={pedido}
                    alt="Mãos segurando um celular ao lado de uma caixa de presente e cápsulas douradas"
                    width={1024}
                    height={1024}
                    className="md:order-first"
                />
            </div>
        </section>
    );
}

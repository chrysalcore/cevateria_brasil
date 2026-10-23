import bombons from '../../assets/images/bombons.webp';
import { steps } from '../../data/steps';
import { Eyebrow } from '../global/Eyebrow';
import { ImageBackdrop } from '../global/ImageBackdrop';

export function HowItWorks({ variant }: { variant: 'fade' | 'curve' }) {
    return (
        <section className="relative isolate overflow-hidden">
            <ImageBackdrop
                src={bombons}
                alt="Bombons embrulhados em papel dourado dentro de uma tigela de cerâmica"
                side="left"
                variant={variant}
            />
            <div className="wrap -mt-12 pb-12 md:mt-0 md:flex md:min-h-128 md:items-center md:justify-end md:py-20">
                <div className="md:w-1/2 md:pl-8 lg:w-5/12">
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
            </div>
        </section>
    );
}

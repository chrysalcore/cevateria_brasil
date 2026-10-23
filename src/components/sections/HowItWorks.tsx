import { steps } from '../../data/steps';
import { Eyebrow } from '../global/Eyebrow';

export function HowItWorks() {
    return (
        <section className="wrap">
            <div className="grid gap-8 border-b border-divider py-12 md:grid-cols-2 md:gap-10 md:py-20 lg:gap-20">
            <div>
                <Eyebrow>Do seu jeito, sem complicação</Eyebrow>
                <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight">
                    Seu pedido começa
                    <br className="hidden md:inline" /> com um <em>olá.</em>
                </h2>
            </div>
            <ol>
                {steps.map(({ title, description }, index) => (
                    <li key={title} className="flex gap-5 border-b border-divider py-5 first:pt-0 last:border-0 last:pb-0 md:gap-6">
                        <span className="font-serif text-2xl text-highlight italic">{String(index + 1).padStart(2, '0')}</span>
                        <div>
                            <h3 className="text-sm font-medium">{title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
                        </div>
                    </li>
                ))}
            </ol>
            </div>
        </section>
    );
}

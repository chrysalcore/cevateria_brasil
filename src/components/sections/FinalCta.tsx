import { useReveal } from '../../hooks/useReveal';
import { Button } from '../global/Button';
import { Icon } from '../global/Icon';
import { WaveDivider } from '../global/WaveDivider';

export function FinalCta() {
    const revealRef = useReveal<HTMLDivElement>();

    return (
        <section className="band-dark relative pt-20 pb-30 text-center md:pt-28 md:pb-46">
            <WaveDivider className="text-accent" />
            <div ref={revealRef} className="wrap *:reveal">
                <Icon name="heart" className="mx-auto mb-3 size-9 text-highlight-soft" />
                <h2 className="font-serif text-4xl leading-tight tracking-tight lg:text-5xl">
                    Sua próxima pausa
                    <br /> pode ter <em>esse sabor.</em>
                </h2>
                <div className="mt-6">
                    <Button href="#produtos" variant="light">
                        Escolher minhas cápsulas
                    </Button>
                </div>
                <p className="mt-4 text-xs opacity-75">Cevada, chocolate e uma boa conversa.</p>
            </div>
        </section>
    );
}

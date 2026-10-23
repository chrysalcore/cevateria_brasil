import { Button } from '../global/Button';

export function FinalCta() {
    return (
        <section className="wrap">
            <div className="rounded-md bg-ink px-5 pt-8 pb-10 text-center text-on-dark md:px-6">
                <span aria-hidden="true" className="mb-2 block font-serif text-4xl text-highlight-soft">
                    ♡
                </span>
                <h2 className="font-serif text-4xl leading-tight tracking-tight lg:text-5xl">
                    Sua próxima pausa
                    <br /> pode ter <em className="text-highlight-soft">esse sabor.</em>
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

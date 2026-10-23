import { Button } from '../global/Button';

export function EmptyCart({ onExplore }: { onExplore: () => void }) {
    return (
        <div className="py-6 text-center">
            <span aria-hidden="true" className="text-5xl">
                ♡
            </span>
            <h3 className="my-4 font-serif text-2xl">Sua pausa começa aqui.</h3>
            <p className="mb-6 text-sm text-muted">Escolha suas cápsulas e adicione ao pedido.</p>
            <Button onClick={onExplore}>Explorar as cápsulas</Button>
        </div>
    );
}

import { Button } from '../global/Button';
import { Icon } from '../global/Icon';

export function EmptyCart({ onExplore }: { onExplore: () => void }) {
    return (
        <div className="py-6 text-center">
            <Icon name="heart" className="mx-auto size-12 text-highlight" />
            <h3 className="my-4 font-serif text-2xl">Sua pausa começa aqui.</h3>
            <p className="mb-6 text-muted">Escolha suas cápsulas e adicione ao pedido.</p>
            <Button onClick={onExplore}>Explorar as cápsulas</Button>
        </div>
    );
}

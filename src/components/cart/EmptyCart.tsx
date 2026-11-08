import { useI18n } from '../../hooks/useI18n';
import { Button } from '../global/Button';
import { Icon } from '../global/Icon';

export function EmptyCart({ onExplore }: { onExplore: () => void }) {
    const { t } = useI18n();

    return (
        <div className="py-6 text-center">
            <Icon name="heart" className="mx-auto size-12 text-highlight" />
            <h3 className="my-4 font-serif text-2xl">{t.cart.emptyTitle}</h3>
            <p className="mb-6 text-muted">{t.cart.emptyText}</p>
            <Button href="#produtos" onClick={onExplore}>
                {t.cart.emptyCta}
            </Button>
        </div>
    );
}

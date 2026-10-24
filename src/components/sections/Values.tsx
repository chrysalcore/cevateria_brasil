import { Fragment } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { Icon } from '../global/Icon';

const values = [
    { icon: 'wheat', label: 'Cevada e chocolate' },
    { icon: 'capsule', label: 'Seu ritual em cápsulas' },
    { icon: 'heart', label: 'Mais sabor para sua pausa' },
    { icon: 'chat', label: 'Pedidos pelo WhatsApp' },
] as const;

export function Values() {
    const revealRef = useReveal<HTMLUListElement>();

    return (
        <div className="border-y border-divider bg-surface">
            <ul
                ref={revealRef}
                className="wrap grid grid-cols-2 gap-x-3 gap-y-5 py-6 text-sm *:reveal md:flex md:items-center md:justify-between md:gap-4"
            >
                {values.map(({ icon, label }, index) => (
                    <Fragment key={label}>
                        {index > 0 && (
                            <li aria-hidden="true" className="hidden text-highlight-soft lg:block">
                                <Icon name="sparkle" className="size-3" />
                            </li>
                        )}
                        <li className="flex items-center gap-2.5">
                            <Icon name={icon} className="size-5 text-highlight" />
                            {label}
                        </li>
                    </Fragment>
                ))}
            </ul>
        </div>
    );
}

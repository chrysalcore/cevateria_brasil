import { Fragment } from 'react';

const values = [
    { icon: '⌁', label: 'Cevada e chocolate' },
    { icon: '◌', label: 'Seu ritual em cápsulas' },
    { icon: '♡', label: 'Mais sabor para sua pausa' },
    { icon: '↗', label: 'Pedidos pelo WhatsApp' },
];

export function Values() {
    return (
        <div className="border-y border-divider bg-surface">
            <ul className="wrap grid grid-cols-2 gap-x-3 gap-y-5 py-6 text-xs md:flex md:items-center md:justify-between md:gap-4 lg:text-sm">
                {values.map(({ icon, label }, index) => (
                    <Fragment key={label}>
                        {index > 0 && (
                            <li aria-hidden="true" className="hidden text-xs text-highlight-soft lg:block">
                                ✦
                            </li>
                        )}
                        <li>
                            <span aria-hidden="true">{icon}</span>&nbsp; {label}
                        </li>
                    </Fragment>
                ))}
            </ul>
        </div>
    );
}

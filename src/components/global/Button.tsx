import { Icon } from './Icon';

const variants = {
    primary: 'bg-accent text-page hover:bg-accent-hover',
    light: 'bg-on-dark text-ink hover:bg-surface',
};

export function Button({
    children,
    variant = 'primary',
    href,
    external = false,
    wide = false,
    onClick,
}: {
    children: React.ReactNode;
    variant?: keyof typeof variants;
    href?: string;
    external?: boolean;
    wide?: boolean;
    onClick?: React.MouseEventHandler<HTMLAnchorElement & HTMLButtonElement>;
}) {
    const className = `inline-flex min-h-12 cursor-pointer items-center justify-center gap-5 rounded px-6 py-4 text-sm font-medium transition motion-safe:hover:-translate-y-0.5 motion-safe:active:scale-95 ${variants[variant]} ${wide ? 'w-full' : ''}`;
    const content = (
        <>
            {children}
            <Icon name="arrow-up-right" className="size-4" />
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                className={className}
                onClick={onClick}
                {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
            >
                {content}
            </a>
        );
    }

    return (
        <button type="button" className={className} onClick={onClick}>
            {content}
        </button>
    );
}

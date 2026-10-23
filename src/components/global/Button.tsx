const variants = {
    primary: 'bg-accent text-paper hover:bg-accent-dark',
    cream: 'bg-cream text-ink hover:bg-clay',
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
    const className = `inline-flex min-h-12 cursor-pointer items-center justify-center gap-5 rounded px-6 py-4 text-sm font-medium transition motion-safe:hover:-translate-y-0.5 ${variants[variant]} ${wide ? 'w-full' : ''}`;
    const content = (
        <>
            {children}
            <span aria-hidden="true" className="text-xl leading-none">
                ↗
            </span>
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

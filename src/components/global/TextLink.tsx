const variants = {
    default: 'hover:text-highlight',
    light: 'hover:text-page',
};

export function TextLink({
    children,
    href,
    external = false,
    arrow = '→',
    variant = 'default',
}: {
    children: React.ReactNode;
    href: string;
    external?: boolean;
    arrow?: string;
    variant?: keyof typeof variants;
}) {
    return (
        <a
            href={href}
            className={`mt-6 inline-flex items-center gap-4 border-b border-highlight-soft pb-2 text-sm transition ${variants[variant]}`}
            {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
        >
            {children}
            <span aria-hidden="true" className="text-xl leading-none">
                {arrow}
            </span>
        </a>
    );
}

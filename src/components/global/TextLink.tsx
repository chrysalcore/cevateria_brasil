export function TextLink({
    children,
    href,
    external = false,
    arrow = '→',
}: {
    children: React.ReactNode;
    href: string;
    external?: boolean;
    arrow?: string;
}) {
    return (
        <a
            href={href}
            className="mt-6 inline-flex items-center gap-4 border-b border-gold pb-2 text-sm transition hover:text-accent"
            {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
        >
            {children}
            <span aria-hidden="true" className="text-xl leading-none">
                {arrow}
            </span>
        </a>
    );
}

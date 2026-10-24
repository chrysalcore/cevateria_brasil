import { Icon } from './Icon';

const variants = {
    default: 'hover:text-highlight',
    light: 'hover:text-page',
};

export function TextLink({
    children,
    href,
    external = false,
    variant = 'default',
}: {
    children: React.ReactNode;
    href: string;
    external?: boolean;
    variant?: keyof typeof variants;
}) {
    return (
        <a
            href={href}
            className={`mt-6 inline-flex items-center gap-4 border-b border-highlight-soft pb-2 text-sm transition ${variants[variant]}`}
            {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
        >
            {children}
            <Icon name={external ? 'arrow-up-right' : 'arrow-right'} className="size-4" />
        </a>
    );
}

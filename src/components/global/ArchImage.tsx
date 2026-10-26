const sizes = {
    wide: 'h-104 md:h-128 lg:h-144',
    compact: 'mx-auto h-96 w-full max-w-xs md:h-120 md:max-w-sm',
};

export function ArchImage({
    src,
    alt,
    width,
    height,
    priority = false,
    size = 'wide',
    className = '',
    children,
}: {
    src: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
    size?: keyof typeof sizes;
    className?: string;
    children?: React.ReactNode;
}) {
    return (
        <div
            className={`relative overflow-hidden rounded-t-arch rounded-b bg-surface-strong ${sizes[size]} ${className}`}
        >
            <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                {...(priority ? { fetchPriority: 'high' } : { loading: 'lazy' })}
                className="size-full object-cover"
            />
            {children}
        </div>
    );
}

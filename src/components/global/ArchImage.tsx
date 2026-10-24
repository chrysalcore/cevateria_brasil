export function ArchImage({
    src,
    alt,
    width,
    height,
    priority = false,
    className = '',
    children,
}: {
    src: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
    className?: string;
    children?: React.ReactNode;
}) {
    return (
        <div
            className={`relative h-104 overflow-hidden rounded-t-arch rounded-b bg-surface-strong md:h-128 lg:h-144 ${className}`}
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

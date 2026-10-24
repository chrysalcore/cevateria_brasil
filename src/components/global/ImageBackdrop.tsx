const sides = {
    right: 'md:right-0 md:[clip-path:ellipse(100%_90%_at_100%_50%)]',
    left: 'md:left-0 md:[clip-path:ellipse(100%_90%_at_0%_50%)]',
};

const spans = {
    wide: 'md:w-1/2 lg:w-7/12',
    narrow: 'md:w-5/12 lg:w-1/2',
};

export function ImageBackdrop({
    src,
    alt,
    width,
    height,
    side,
    span = 'wide',
    priority = false,
    children,
}: {
    src: string;
    alt: string;
    width: number;
    height: number;
    side: keyof typeof sides;
    span?: keyof typeof spans;
    priority?: boolean;
    children?: React.ReactNode;
}) {
    return (
        <div
            className={`relative mx-5 mb-12 h-104 overflow-hidden rounded-t-arch rounded-b bg-surface-strong md:absolute md:inset-y-0 md:m-0 md:h-auto md:rounded-none ${spans[span]} ${sides[side]}`}
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

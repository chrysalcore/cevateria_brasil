const sides = {
    right: 'md:right-0 md:[clip-path:ellipse(100%_90%_at_100%_50%)]',
    left: 'md:left-0 md:[clip-path:ellipse(100%_90%_at_0%_50%)]',
};

export function ImageBackdrop({
    src,
    alt,
    side,
    priority = false,
    children,
}: {
    src: string;
    alt: string;
    side: keyof typeof sides;
    priority?: boolean;
    children?: React.ReactNode;
}) {
    return (
        <div
            className={`relative mx-5 mb-12 h-104 overflow-hidden rounded-t-arch rounded-b bg-surface-strong md:absolute md:inset-y-0 md:m-0 md:h-auto md:w-1/2 md:rounded-none lg:w-7/12 ${sides[side]}`}
        >
            <img
                src={src}
                alt={alt}
                width={960}
                height={1280}
                {...(priority ? { fetchPriority: 'high' } : { loading: 'lazy' })}
                className="size-full object-cover"
            />
            {children}
        </div>
    );
}

const sides = {
    right: {
        position: 'md:right-0',
        curve: 'md:[clip-path:ellipse(100%_90%_at_100%_50%)]',
        fade: 'md:bg-linear-to-r',
    },
    left: {
        position: 'md:left-0',
        curve: 'md:[clip-path:ellipse(100%_90%_at_0%_50%)]',
        fade: 'md:bg-linear-to-l',
    },
};

export function ImageBackdrop({
    src,
    alt,
    side,
    variant,
    priority = false,
    children,
}: {
    src: string;
    alt: string;
    side: keyof typeof sides;
    variant: 'fade' | 'curve';
    priority?: boolean;
    children?: React.ReactNode;
}) {
    const { position, curve, fade } = sides[side];

    return (
        <div
            className={`relative -z-10 h-80 md:absolute md:inset-y-0 md:h-auto md:w-1/2 lg:w-7/12 ${position} ${variant === 'curve' ? `[clip-path:ellipse(90%_100%_at_50%_0%)] ${curve}` : ''}`}
        >
            <img
                src={src}
                alt={alt}
                width={960}
                height={1280}
                {...(priority ? { fetchPriority: 'high' } : { loading: 'lazy' })}
                className="size-full object-cover"
            />
            {variant === 'fade' && (
                <div
                    aria-hidden="true"
                    className={`absolute inset-0 bg-linear-to-t from-page via-page/20 via-40% to-transparent md:via-35% ${fade}`}
                />
            )}
            {children}
        </div>
    );
}

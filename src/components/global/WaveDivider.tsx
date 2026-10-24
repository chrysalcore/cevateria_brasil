export function WaveDivider({ className }: { className: string }) {
    return (
        <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            aria-hidden="true"
            className={`pointer-events-none absolute inset-x-0 bottom-full h-14 w-full fill-current stroke-none md:h-24 ${className}`}
        >
            <path fillOpacity="0.25" d="M90 34c120 0 250-4 370-12-115 14-245 20-370 12Z" />
            <path fillOpacity="0.5" d="M110 62c95 0 195-3 290-10-90 13-190 18-290 10Z" />
            <path fillOpacity="0.4" d="M0 92c480-14 960-34 1440-52v80H0Z" />
            <path d="M0 112c480-14 960-34 1440-52v60H0Z" />
        </svg>
    );
}

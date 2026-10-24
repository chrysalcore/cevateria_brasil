const paths = {
    'arrow-right': 'M4 12h16m-6-6 6 6-6 6',
    'arrow-up-right': 'M7 17 17 7M8 7h9v9',
    bag: 'M5 7h14l1 14H4L5 7Zm3 0V5a4 4 0 0 1 8 0v2',
    capsule: 'M4.5 7h15M7 7l1.5 11.2a2 2 0 0 0 2 1.8h3a2 2 0 0 0 2-1.8L17 7M9 7c0-1.9 1.3-3 3-3s3 1.1 3 3',
    chat: 'm4.5 19.5 1.2-3.7a8 8 0 1 1 3 2.8l-4.2.9Z',
    close: 'M6 6l12 12M18 6 6 18',
    cup: 'M4 8h13v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Zm13 1h2a3 3 0 0 1 0 6h-2M7 3v2m5-2v2M2 23h19',
    heart: 'M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7.5 2.8C19.5 15.4 12 20 12 20Z',
    menu: 'M4 7h16M4 12h16M4 17h16',
    minus: 'M5 12h14',
    plus: 'M12 5v14M5 12h14',
    sparkle: 'M12 3c.6 5 3 8.4 9 9-6 .6-8.4 4-9 9-.6-5-3-8.4-9-9 6-.6 8.4-4 9-9Z',
    wheat: 'M12 21V6m0 0c-1.2-1.2-1.2-2.8 0-4 1.2 1.2 1.2 2.8 0 4Zm0 5c-2.5 0-4-1.5-4-3.5 2.5 0 4 1.5 4 3.5Zm0 0c2.5 0 4-1.5 4-3.5-2.5 0-4 1.5-4 3.5Zm0 4.5c-2.5 0-4-1.5-4-3.5 2.5 0 4 1.5 4 3.5Zm0 0c2.5 0 4-1.5 4-3.5-2.5 0-4 1.5-4 3.5Z',
};

export function Icon({ name, className = 'size-5' }: { name: keyof typeof paths; className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={className}
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d={paths[name]} />
        </svg>
    );
}

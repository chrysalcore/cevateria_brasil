export function Eyebrow({ children, line = false }: { children: React.ReactNode; line?: boolean }) {
    return (
        <span
            className={`block text-xs font-semibold tracking-widest uppercase ${line ? 'before:mr-2.5 before:inline-block before:h-px before:w-6 before:bg-accent before:align-middle' : ''}`}
        >
            {children}
        </span>
    );
}

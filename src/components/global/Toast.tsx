export function Toast({ message, visible }: { message: string; visible: boolean }) {
    return (
        <div
            role="status"
            aria-live="polite"
            className={`fixed bottom-6 left-1/2 z-20 w-max max-w-[calc(100%-2rem)] -translate-x-1/2 rounded bg-ink px-6 py-4 text-sm text-page shadow-toast transition duration-200 ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-5 opacity-0'}`}
        >
            {message}
        </div>
    );
}

import { useEffect, useRef } from 'react';

const STAGGER_MS = 100;

function reveal(element: Element, index: number) {
    if (element instanceof HTMLElement) element.style.transitionDelay = `${index * STAGGER_MS}ms`;
    element.setAttribute('data-revealed', '');
}

export function useReveal<T extends HTMLElement>() {
    const ref = useRef<T>(null);

    useEffect(() => {
        const container = ref.current;
        if (!container) return;

        const children = Array.from(container.children);
        if (typeof IntersectionObserver === 'undefined') {
            children.forEach(reveal);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries
                    .filter((entry) => entry.isIntersecting)
                    .forEach((entry, index) => {
                        reveal(entry.target, index);
                        observer.unobserve(entry.target);
                    });
            },
            { rootMargin: '0px 0px -15% 0px' },
        );
        children.forEach((child) => observer.observe(child));

        return () => observer.disconnect();
    }, []);

    return ref;
}

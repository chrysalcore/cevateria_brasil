import { useCallback, useEffect, useRef, useState } from 'react';

const TOAST_DURATION = 3500;

export function useToast() {
    const [message, setMessage] = useState('');
    const [visible, setVisible] = useState(false);
    const timer = useRef<number>(undefined);

    const showToast = useCallback((text: string) => {
        setMessage(text);
        setVisible(true);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setVisible(false), TOAST_DURATION);
    }, []);

    useEffect(() => () => clearTimeout(timer.current), []);

    return { message, visible, showToast };
}

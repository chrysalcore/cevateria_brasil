import { es } from './es';
import { type Messages, pt } from './pt';

export type { Messages };

export const locales = ['pt-BR', 'es'] as const;

export type Locale = (typeof locales)[number];

export const DEFAULT_LOCALE: Locale = 'pt-BR';

export const messages: Record<Locale, Messages> = { 'pt-BR': pt, es };

export const languages: Record<Locale, { path: string; code: string; name: string }> = {
    'pt-BR': { path: '', code: 'PT', name: 'Português' },
    es: { path: 'es/', code: 'ES', name: 'Español' },
};

export function isLocale(value: string): value is Locale {
    return (locales as readonly string[]).includes(value);
}

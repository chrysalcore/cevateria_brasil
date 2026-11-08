import { createContext } from 'react';

import type { Locale, Messages } from '../data/i18n';

export type I18n = { locale: Locale; t: Messages };

export const I18nContext = createContext<I18n | null>(null);

import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { CartProvider } from './context/CartProvider';
import { I18nContext } from './context/I18nContext';
import { DEFAULT_LOCALE, isLocale, messages } from './data/i18n';

const lang = document.documentElement.lang;
const locale = isLocale(lang) ? lang : DEFAULT_LOCALE;
const i18n = { locale, t: messages[locale] };

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <I18nContext value={i18n}>
            <CartProvider>
                <App />
            </CartProvider>
        </I18nContext>
    </StrictMode>,
);

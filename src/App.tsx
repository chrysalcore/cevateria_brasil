import { useState } from 'react';

import { CartDialog } from './components/cart/CartDialog';
import { Announcement } from './components/layout/Announcement';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { Essence } from './components/sections/Essence';
import { Faq } from './components/sections/Faq';
import { FinalCta } from './components/sections/FinalCta';
import { Hero } from './components/sections/Hero';
import { HowItWorks } from './components/sections/HowItWorks';
import { Products } from './components/sections/Products';
import { Values } from './components/sections/Values';
import { useI18n } from './hooks/useI18n';

export function App() {
    const { t } = useI18n();
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <>
            <a href="#conteudo" className="fixed -top-24 left-2.5 z-30 bg-page p-3 focus:top-2.5">
                {t.skipLink}
            </a>
            <Announcement />
            <Header onOpenCart={() => setCartOpen(true)} />
            <main id="conteudo">
                <Hero />
                <Values />
                <Products />
                <Essence />
                <HowItWorks />
                <Faq />
                <FinalCta />
            </main>
            <Footer />
            <CartDialog open={cartOpen} onClose={() => setCartOpen(false)} />
        </>
    );
}

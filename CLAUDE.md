# cevateria_brasil — notas específicas de este repo

Reconstrucción en React del sitio estático https://cevadascomamor.netlify.app/ (HTML + CSS + JS vanilla). Cliente: Cevadas com Amor, cápsulas de cevada con chocolate (Brasil, contenido en pt-BR).

- Stack: Vite + React 19 + TypeScript `strict` + Tailwind v4 (config en `src/index.css`, sin `tailwind.config.js`) + Zod.
- Sin backend ni pagos: el "checkout" arma un mensaje y abre `wa.me` (`src/helpers/whatsapp.ts`). Número en `src/data/contact.ts`. Precios en centavos (`cents`), formateados en BRL con `formatPrice`.
- Carrito: Context + `useReducer` (`context/CartProvider.tsx`), hook `useCart`. Estado del diálogo en `App`.
- Paleta cerrada (`--color-*: initial`) tomada del sitio original; `muted` oscurecido a `#75655a` para pasar AA (el original `#827267` daba ~4.4:1).
- Tipografía en escala estándar de Tailwind con mínimo `text-xs` (el original usaba 8–11px). Excepción: `text-[0.5rem]`/`text-[0.625rem]` solo en logotipo, sello del hero y notas "Imagen ilustrativa".
- Referencia de contenido: el sitio en vivo (un solo WhatsApp, sin InfinitePay), no el brief en PDF que lo originó (ya eliminado).
- Deploy: GitHub Pages, no Netlify. `base: '/cevateria_brasil/'` en `vite.config.ts` (asume que el repo se llama así). Workflows copiados de `pokedex`: `ci.yml` (push a `development`: typecheck + lint + build, abre PR a `main`) y `deploy.yml` (push a `main`: build + publica `dist` en `gh-pages`). Cuando se agreguen tests, sumar el paso de tests a `ci.yml`.
- Pendiente: `og:image` todavía apunta a `https://cevadascomamor.netlify.app/og-image.jpg` (URL vieja); cambiarla a la URL absoluta de GitHub Pages.

# cevateria_brasil — notas específicas de este repo

Reconstrucción en React del sitio estático https://cevadascomamor.netlify.app/ (HTML + CSS + JS vanilla). Cliente: **Cevateria Brasil** (marca nueva desde 2026-10-23; antes "Cevadas com Amor", nombre que aún aparece en el sitio viejo y en fotos de producto), cápsulas de cevada con chocolate (Brasil, contenido en pt-BR).

- Stack: Vite + React 19 + TypeScript `strict` + Tailwind v4 (config en `src/index.css`, sin `tailwind.config.js`) + Zod.
- Sin backend ni pagos: el "checkout" arma un mensaje y abre `wa.me` (`src/helpers/whatsapp.ts`). Número en `src/data/contact.ts`. Precios en centavos (`cents`), formateados en BRL con `formatPrice`.
- Carrito: Context + `useReducer` (`context/CartProvider.tsx`), hook `useCart`. Estado del diálogo en `App`.
- Paleta cerrada (`--color-*: initial`) derivada del logo de Cevateria Brasil (2026-10-23), con **nombres por función**, no por tono: `page`, `surface`, `surface-strong`, `selected`, `ink`, `muted`, `on-dark`, `accent`/`accent-hover` (chocolate del logo, decisión de Ordnay; reemplazó al vino de la marca anterior), `highlight` (bronce: `em` de títulos y números), `highlight-soft` (dorado: solo decoración y `em` sobre fondo oscuro), `divider` (separadores, decorativo), `control` (bordes de campos y botones), `error`.
- Contraste verificado: texto ≥ 4.5:1 sobre `page`/`surface`/`selected`; `control` ≥ 3:1 (WCAG 1.4.11, bordes de controles). `highlight-soft` no llega a 3:1 sobre fondos claros: no usarlo para texto ni para bordes de controles. `divider` es decorativo, nunca para delimitar un campo.
- Sombras y backdrop derivan de `--color-ink` con `color-mix`, sin `rgb()` sueltos.
- Tipografía en escala estándar de Tailwind con mínimo `text-xs` (el original usaba 8–11px). Excepción: `text-[0.5rem]`/`text-[0.625rem]` solo en logotipo, sello del hero y notas "Imagen ilustrativa".
- Referencia de contenido: el sitio en vivo (un solo WhatsApp, sin InfinitePay), no el brief en PDF que lo originó (ya eliminado).
- Deploy: GitHub Pages, no Netlify. `base: '/cevateria_brasil/'` en `vite.config.ts` (asume que el repo se llama así). Workflow `deploy.yml` copiado de `pokedex` (push a `main`: build + publica `dist` en `gh-pages`). Sin CI por ahora (decisión de Ordnay, 2026-10-23); se agrega junto con los tests, siguiendo el `ci.yml` de `pokedex`.
- `og:image`: foto real del producto completa, sin recortar (960×1280, decisión de Ordnay), con URL absoluta de GitHub Pages; si cambia el dominio, actualizarla.

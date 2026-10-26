# cevateria_brasil — notas específicas de este repo

Reconstrucción en React del sitio estático https://cevadascomamor.netlify.app/ (HTML + CSS + JS vanilla). Cliente: **Cevateria Brasil** (marca nueva desde 2026-10-23; antes "Cevadas com Amor", nombre que aún aparece en el sitio viejo y en fotos de producto), cápsulas de cevada con chocolate (Brasil, contenido en pt-BR).

- Stack: Vite + React 19 + TypeScript `strict` + Tailwind v4 (config en `src/index.css`, sin `tailwind.config.js`) + Zod.
- Sin backend ni pagos: el "checkout" arma un mensaje y abre `wa.me` (`src/helpers/whatsapp.ts`). Número en `src/data/contact.ts`. Precios en centavos (`cents`), formateados en BRL con `formatPrice`.
- Carrito: Context + `useReducer` (`context/CartProvider.tsx`), hook `useCart`, que expone también `count` y `subtotal` (`helpers/cart.ts`). Estado del diálogo en `App`. Persiste en `localStorage` (`cevateria:cart`) solo como `{ id, quantity }`: al cargar se valida con Zod (`schemas/storedCartSchema.ts`) y se rehidrata desde `data/products`, así un precio cambiado nunca queda viejo en el carrito; si el storage falta o está corrupto, arranca vacío.
- Paleta cerrada (`--color-*: initial`) derivada del logo de Cevateria Brasil (2026-10-23), con **nombres por función**, no por tono: `page`, `surface`, `surface-strong`, `selected`, `ink`, `muted`, `on-dark`, `accent`/`accent-hover` (chocolate del logo, decisión de Ordnay; reemplazó al vino de la marca anterior), `highlight` (bronce: `em` de títulos y números), `highlight-soft` (dorado: solo decoración y `em` sobre fondo oscuro), `divider` (separadores, decorativo), `control` (bordes de campos y botones), `error`.
- Contraste verificado: texto ≥ 4.5:1 sobre `page`/`surface`/`selected`; `control` ≥ 3:1 (WCAG 1.4.11, bordes de controles). `highlight-soft` no llega a 3:1 sobre fondos claros: no usarlo para texto ni para bordes de controles. `divider` es decorativo, nunca para delimitar un campo.
- Sombras y backdrop derivan de `--color-ink` con `color-mix`, sin `rgb()` sueltos.
- Íconos: solo `global/Icon` (set SVG propio, `strokeWidth="1.3"`, extremos redondeados). Nada de caracteres Unicode como ícono: DM Sans de Google Fonts no trae `↗`/`♡`/`☰` y el navegador los toma de otra fuente según el sistema.
- Bandas de color: `page` → `surface` → `page` → chocolate (`band-dark`) → `surface` → `page` → chocolate → `surface` (footer).
- Transición entre bandas: `global/WaveDivider` (onda en capas según una referencia de Ordnay, 2026-10-24: onda sólida + franja translúcida + dos trazos afinados a la izquierda), primer hijo de la banda, coloreado con `text-*` del fondo de esa banda. Se dibuja por encima de la sección anterior (`bottom-full`), así que esa sección necesita al menos `pb-16 md:pb-28` (criterio actual, 2026-10-24: padding inferior = superior + ~¾ del alto de la onda, unos 40px en mobile y 72px en `md`, para que el aire visible quede simétrico) y la banda, `relative` sin `overflow-hidden`. Antes se probó una tapa en arco y se descartó.
- Formato: Prettier (`.prettierrc`: 4 espacios, 2 en JSON/YAML/HTML/`eslint.config.mjs`, comillas simples, 120 columnas) con `prettier-plugin-tailwindcss` para ordenar clases (`tailwindStylesheet` apunta a `src/index.css`, necesario en Tailwind v4). Imports ordenados por `eslint-plugin-simple-import-sort` (`npx eslint --fix`). Scripts: `npm run format` y `npm run format:check`.
- Contenido de las secciones (`steps`, `faq`, `values`, `products`) en `data/`, no inline en el componente.
- Clases largas que se repiten o arrastran estados (`::after`, hover) van como `@utility` en `index.css` (ej. `nav-link`); dentro de una `@utility`, el hover va con `@variant hover` para conservar la guarda `@media (hover: hover)` de Tailwind.
- Texto de lectura (párrafos, pasos, FAQ, inputs) en `text-base`; `text-sm`/`text-xs` solo para etiquetas, controles y notas.
- Tipografía en escala estándar de Tailwind con mínimo `text-xs` (el original usaba 8–11px). Excepción: `text-[0.5rem]`/`text-[0.625rem]` solo en logotipo, sello del hero y notas "Imagen ilustrativa".
- Referencia de contenido: el sitio en vivo (un solo WhatsApp, sin InfinitePay), no el brief en PDF que lo originó (ya eliminado).
- Deploy: GitHub Pages, no Netlify. `base: '/cevateria_brasil/'` en `vite.config.ts` (asume que el repo se llama así). Workflow `deploy.yml` copiado de `pokedex` (push a `main`: build + publica `dist` en `gh-pages`). Sin CI por ahora (decisión de Ordnay, 2026-10-23); se agrega junto con los tests, siguiendo el `ci.yml` de `pokedex`.
- `og:image`: foto real del producto completa, sin recortar (960×1280, decisión de Ordnay), con URL absoluta de GitHub Pages; si cambia el dominio, actualizarla.

## Pendientes (revisión del 2026-10-24, para hacer más adelante)

- Tests + CI siguiendo `pokedex-app`: reducer, `buildOrderMessage`, flujo agregar → abrir pedido → validar CEP.

Visuales (comparación con `chrysal-core`, `sofi-nails` y `molino_rojo`, 2026-10-24; pautas en el `CLAUDE.md` global, sección "Diseño visual"):

- Logo: se mantiene el raster original del cliente (`assets/images/logo.webp`). El 2026-10-25 se le propuso un logo nuevo (taza de una sola línea con una "C" en espiral y vapor, trazo tipo pincel, a partir de un boceto de Ordnay) y no lo aprobó. Lo único que se conserva de esa propuesta es `~/Desktop/logo-cev-4.png`.
- Sin prueba social: sección de testimonios o reseñas cuando el cliente tenga material.
- Hero (2026-10-25): se sumó un segundo botón "Falar no WhatsApp" (variante `outline` de `Button`) y una línea de precio de referencia calculada de `data/products` (el producto con menor precio por cápsula), en lugar de la frase decorativa; título `text-5xl` en mobile para que el botón entre en la primera pantalla. En mobile la foto sigue quedando bajo el primer pantallazo.
- En tablet (`md`, 768px) los links del menú se parten en dos líneas: revisar tamaño o cuándo aparece el menú desplegable.

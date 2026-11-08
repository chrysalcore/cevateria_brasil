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
- Contenido: datos sin texto en `data/` (`products` con precio e imagen, orden de `values`); todo texto visible vive en los diccionarios de `data/i18n/`, no inline en el componente.
- i18n (2026-11-07): pt-BR en `/cevateria_brasil/` (por defecto, URL original) y español en `/cevateria_brasil/es/`. Público hispanohablante: sobre todo venezolanos, cubanos y peruanos en Roraima → español latinoamericano neutro con tuteo, sin voseo ni modismos de un país.
  - Rutas como **dos HTML** (`index.html`, `es/index.html`, entradas en `build.rolldownOptions.input` de `vite.config.ts`), sin router: cada página trae su `lang`, `<title>`, meta, `canonical`, `hreflang` (incluido `x-default` → pt-BR) y `og:locale`, y GitHub Pages sirve `/es/` sin el truco del `404.html`. Al cambiar meta en un HTML, replicarlo en el otro.
  - `main.tsx` toma el idioma de `<html lang>` (validado con `isLocale`) y lo pasa por `I18nContext`; los componentes usan `useI18n()` → `{ locale, t }`.
  - Diccionarios tipados sin librería: `Messages = typeof pt` y `es: Messages`, así una clave faltante rompe el typecheck. Plurales e interpolación con funciones (`t.product.name(capsules)`). Nombres y `alt` de producto se generan de `capsules`; `Product` no tiene texto.
  - Títulos con `<br>`/`<em>`: el diccionario parte el texto (`titleStart`, `titleEnd`, `titleEmphasis`) y el marcado queda en el componente.
  - **Los mensajes de WhatsApp (pedido y consulta) van siempre en portugués** (decisión de Ordnay): la atención es en portugués. `helpers/whatsapp.ts` usa `pt` directo y `QUESTION_MESSAGE` vive en `data/contact.ts`; la nota del checkout en español avisa que el mensaje sale en portugués.
  - Precios siempre en formato `pt-BR` (`R$ 3,60`) también en español: el formato de moneda sigue al mercado, no al idioma (`Intl` en `es` daría `3,60 BRL`).
  - Error del CEP: `cepSchema` solo valida; el texto lo pone el componente desde `t.checkout.cepError`.
  - Selector de idioma en el header, junto al carrito: muestra el código (`ES`/`PT`) con `aria-label`, `lang` y `hrefLang` del destino. El carrito se conserva al cambiar de idioma (en `localStorage` solo hay `{ id, quantity }`).
  - Sin redirección por idioma del navegador: un hosting estático no puede hacerla en el servidor y con JS pisaría a quien eligió `PT` a propósito.
- Clases largas que se repiten o arrastran estados (`::after`, hover) van como `@utility` en `index.css` (ej. `nav-link`); dentro de una `@utility`, el hover va con `@variant hover` para conservar la guarda `@media (hover: hover)` de Tailwind.
- Texto de lectura (párrafos, pasos, FAQ, inputs) en `text-base`; `text-sm`/`text-xs` solo para etiquetas, controles y notas.
- Tipografía en escala estándar de Tailwind con mínimo `text-xs` (el original usaba 8–11px). Excepción: `text-[0.5rem]`/`text-[0.625rem]` solo en logotipo, sello del hero y notas "Imagen ilustrativa".
- Referencia de contenido: el sitio en vivo (un solo WhatsApp, sin InfinitePay), no el brief en PDF que lo originó (ya eliminado).
- Deploy: GitHub Pages, no Netlify. Desde 2026-11-07 se publica desde `development` lanzando `deploy.yml` a mano (`gh workflow run deploy.yml --ref development`); `main` quedó atrás de lo publicado. `base: '/cevateria_brasil/'` en `vite.config.ts` (asume que el repo se llama así). Workflow `deploy.yml` copiado de `pokedex` (push a `main`: build + publica `dist` en `gh-pages`). Sin CI por ahora (decisión de Ordnay, 2026-10-23); se agrega junto con los tests, siguiendo el `ci.yml` de `pokedex`.
- `og:image`: foto real del producto completa, sin recortar (960×1280, decisión de Ordnay), con URL absoluta de GitHub Pages; si cambia el dominio, actualizarla.

## Pendientes (revisión del 2026-10-24, para hacer más adelante)

- Tests + CI siguiendo `pokedex-app`: reducer, `buildOrderMessage`, flujo agregar → abrir pedido → validar CEP.

Visuales (comparación con `chrysal-core`, `sofi-nails` y `molino_rojo`, 2026-10-24; pautas en el `CLAUDE.md` global, sección "Diseño visual"):

- Logo: se mantiene el raster original del cliente (`assets/images/logo.webp`). El 2026-10-25 se le propuso un logo nuevo (taza de una sola línea con una "C" en espiral y vapor, trazo tipo pincel, a partir de un boceto de Ordnay) y no lo aprobó. Lo único que se conserva de esa propuesta es `~/Desktop/logo-cev-4.png`.
- Sin prueba social: sección de testimonios o reseñas cuando el cliente tenga material.
- Hero (2026-10-25): se sumó un segundo botón "Falar no WhatsApp" (variante `outline` de `Button`) y una línea de precio de referencia calculada de `data/products` (el producto con menor precio por cápsula), en lugar de la frase decorativa; título `text-5xl` en mobile para que el botón entre en la primera pantalla. En mobile la foto sigue quedando bajo el primer pantallazo.
- En tablet (`md`, 768px) los links del menú se parten en dos líneas: revisar tamaño o cuándo aparece el menú desplegable.

# Cevateria Brasil

Landing page and order builder for Cevateria Brasil, a Brazilian brand of barley-with-chocolate capsules.

[![React](https://img.shields.io/badge/React_19.3.1-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript_6.0-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite_8.3.5-yellow)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4.3.3-teal)](https://tailwindcss.com/)
[![Zod](https://img.shields.io/badge/Zod_4.6.7-blue)](https://zod.dev/)
[![License](https://img.shields.io/badge/Polyform_Perimeter_License_1.0.0-red)](LICENSE)

## Preview

Live Link: [https://chrysalcore.github.io/cevateria_brasil/](https://chrysalcore.github.io/cevateria_brasil/) (Portuguese) · [/es/](https://chrysalcore.github.io/cevateria_brasil/es/) (Spanish)

## Description

**Cevateria Brasil** is a single-page site for a small Brazilian business that sells barley-with-chocolate capsules, individually or in kits of 4, 6, 8 and 10.

Visitors pick an option, set a quantity and build their order in a cart dialog. There is no payment gateway: checkout turns the order into a pre-filled WhatsApp message (items, subtotal, name and postal code), and availability, shipping and payment are confirmed in the conversation. The site is available in Brazilian Portuguese and Spanish, for the Spanish-speaking community in the region. The warm palette of cream, chocolate and bronze, the Playfair Display + DM Sans pairing and the arched shapes aim for a calm, cozy feel that matches the brand's "small pauses" message.

It is a React + TypeScript rebuild of the brand's original vanilla HTML/CSS/JS site, keeping its design and content while fixing spacing and contrast issues along the way. It adheres to best practices, responsiveness, accessibility, and other modern web standards.

## Main Features

- Product selector with price per option, quantity control (1–99) and an accessible toast on add-to-cart.
- Cart state with **Context + `useReducer`**: typed actions as a discriminated union, quantities clamped in the reducer, item count shown in the header badge.
- Cart built on the native `<dialog>` element: focus trapping, Escape to close and backdrop come from the browser; closes on outside click.
- WhatsApp checkout: the order summary is encoded into a `wa.me` link, with prices stored in cents and formatted in BRL with `Intl.NumberFormat`.
- Cart persisted in `localStorage` as `{ id, quantity }` only, validated with Zod on load and rehydrated from the product data, so a changed price never stays stale.
- **Internationalization (pt-BR / es) without a library:** each language is its own static page (`/` and `/es/`, two Vite HTML entries) with its own `lang`, title, meta, `canonical` and `hreflang` tags, so search engines index both versions without running JavaScript. Typed dictionaries (`Messages = typeof pt`) make a missing translation a compile error; plurals and interpolation use plain functions. WhatsApp messages are always sent in Portuguese, the language of the business.
- Optional postal code (CEP) validated with **Zod**, with an accessible inline error (`aria-invalid` + `aria-describedby`).
- FAQ with native `<details>`, skip link, mobile menu with `aria-expanded`, language switch with `lang`/`hrefLang`, and visible focus states.
- Responsive UI styled with **Tailwind CSS v4**: a closed brand palette and fonts on top of Tailwind's standard scales, with shared components (`Button`, `Eyebrow`, `QuantityControl`) instead of per-section stylesheets.
- Strict TypeScript across components, context, hooks and helpers.

## Technologies Used

| Category | Technologies |
| :--- | :--- |
| Frontend & Language | React 19, TypeScript 6 (strict), Vite 8 |
| State Management | Context + useReducer |
| Validation | Zod |
| Routing / i18n | Static page per language (Vite multi-page), typed dictionaries |
| Style | Tailwind CSS 4 |
| Tools | ESLint, Prettier |
| Version Control | Git, GitHub |
| CI/CD | GitHub Actions |
| Deployment | GitHub Pages |

## Local Installation and Use

Follow these steps to run the project on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/es/)
- [NPM](https://www.npmjs.com)

### Steps

1. Clone the repository

    ```bash
    git clone https://github.com/chrysalcore/cevateria_brasil.git
    cd cevateria_brasil
    ```

2. Install dependencies

    ```bash
    npm install
    ```

3. Run development mode

    ```bash
    npm run dev
    ```

### Other scripts

```bash
npm run typecheck # tsc --noEmit
npm run lint      # eslint
npm run build     # typecheck + production build
npm run preview   # serve the production build
npm run format    # prettier --write
```

## Deployment

A GitHub Actions workflow builds the project and publishes `dist/` (both language pages) to the `gh-pages` branch. It runs on every push to `main` and can be triggered manually on any branch:

```bash
gh workflow run deploy.yml --ref development
```

## License

This project is licensed under the [PolyForm Perimeter License 1.0.0](LICENSE)

### Key Restrictions

- Free use for **non-commercial projects**.
- Use **prohibited** in businesses that compete with the owner.
- **Contact the owner** for a commercial license.

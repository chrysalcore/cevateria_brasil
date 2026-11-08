import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: '/cevateria_brasil/',
    build: {
        rolldownOptions: {
            input: {
                main: 'index.html',
                es: 'es/index.html',
            },
        },
    },
});

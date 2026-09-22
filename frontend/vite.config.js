import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            fontFamily: {
                cormorant: ['Cormorant', 'serif'],
            },
            colors: {
                forest: { DEFAULT: '#1F3D33', light: '#2F5C4C' },
                cream: '#F3EBDD',
                offwhite: '#FDFCFA',
                stone: '#8A8A82',
                walnut: '#6B4F3B',
            },
        },
    },
    plugins: [react(), tailwindcss()],
})
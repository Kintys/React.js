import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/',
    build: {
        assetsDir: 'assets',
        rollupOptions: {
            output: {
                manualChunks: undefined,
                assetFileNames: 'assets/[name]-[hash][extname]',
                chunkFileNames: 'assets/[name]-[hash].js',
                entryFileNames: 'assets/[name]-[hash].js'
            }
        }
    },
    resolve: {
        alias: {
            '@': '/src',
            '@views': '/src/views',
            '@components': '/src/components',
            '@layout': '/src/layout',
            '@routes': '/src/routes',
            '@store': '/src/store',
            '@hooks': '/src/hooks',
            '@assets': '/src/assets',
            '@context': '/src/context',
            '@api': '/src/api'
        }
    }
})

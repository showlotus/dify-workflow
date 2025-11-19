import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'next/navigation': path.resolve(__dirname, 'src/polyfills/next-navigation.tsx'),
      'next/link': path.resolve(__dirname, 'src/polyfills/next-link.tsx'),
      'next/image': path.resolve(__dirname, 'src/polyfills/next-image.tsx'),
      'next/dynamic': path.resolve(__dirname, 'src/polyfills/next-dynamic.tsx'),
    },
  },
})

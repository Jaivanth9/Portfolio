import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // Treat `.js` files as `.jsx`
    include: /src\/.*\.js$/, // Apply only to your source files
  },
});

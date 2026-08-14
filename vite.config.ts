import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base path para publicação em GitHub Pages (https://usuario.github.io/nome-do-repositorio/).
// Pode ser sobrescrito pela variável de ambiente VITE_BASE_PATH em builds customizados.
const basePath = process.env.VITE_BASE_PATH ?? '/SaneIA/';

export default defineConfig({
  base: basePath,
  plugins: [react()],
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
  build: {
    outDir: 'dist',
  },
});

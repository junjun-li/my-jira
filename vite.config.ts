import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 4455,
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
    ],
  },
  define: {
    'process.env': {
      // 'BASE_API': 'http://localhost:8021/api',
      'REACT_APP_API_URL': 'http://localhost:3001',
    },
  },
});

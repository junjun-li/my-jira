import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 4455,
  },
  plugins: [svgr(), react()],
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
  css: {
    preprocessorOptions: {
      less: {
        // 全局less变量
        modifyVars: {
          '@primary-color': 'rgb(0, 82, 204)',
          '@font-size-base': '16px',
        },
        javascriptEnabled: true,
      },
    },
  },
});

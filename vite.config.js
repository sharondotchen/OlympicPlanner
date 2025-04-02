import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vite.dev/config/
//export default {
 // optimizeDeps: {
 //   exclude: ['fsevents']
 // }
//};

export default defineConfig({
  plugins: [svelte()]
});
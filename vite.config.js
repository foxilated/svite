import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import unocss from '@unocss/vite';
import unocssPresetIcons from '@unocss/preset-icons';
import svelte_preprocess from 'svelte-preprocess';

export default defineConfig({
  resolve: {
    alias: {
      src: '/src',
      lib: '/src/lib',
      pages: '/src/pages',
      plugins: '/src/plugins',
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.svelte'],
  },
  plugins: [
    svelte({
      preprocess: [svelte_preprocess()],
    }),
    unocss({
      presets: [
        unocssPresetIcons({
          scale: 2,
          prefix: 'i-',
          mode: 'auto',
          warn: true,
          extraProperties: {
            display: 'inline-block',
            'vertical-align': 'middle',
          },
        }),
      ],
    }),
  ],
  publicDir: './src/assets',
});

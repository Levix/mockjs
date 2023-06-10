// vite.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'c8', // or 'v8'
      exclude: [
        '**/interface.ts',
      ],
    },
  },
});

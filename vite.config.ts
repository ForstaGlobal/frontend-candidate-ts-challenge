import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/*.{spec,bench,test}.ts'],
    globals: true,
    environment: 'node',
    watch: true,
    diff: {
      bAnnotation: 'Actual',
    },
    silent: true,
    setupFiles: './vitest.setup.ts',
  },
});

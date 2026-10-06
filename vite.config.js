import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: 'src/overwebs-loading-spinner.js',
      formats: ['es'],
      fileName: () => 'overwebs-loading-spinner.js'
    },
    rollupOptions: {
      // Keep gluonjs as a peer import so consumers share a single copy
      external: [/^gluonjs(\/.*)?$/]
    }
  }
});

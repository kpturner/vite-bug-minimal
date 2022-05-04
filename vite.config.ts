import * as path from 'path';
import { defineConfig } from 'vite';

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
    plugins: [
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, 'src')
            }
        ]
    },
    build: {
        minify: false,
        lib: {
            entry: path.resolve(__dirname, 'server.ts'),
            name: 'EntryServer',
            fileName: (format) => `server.${format}.js`
        },
        rollupOptions: {
            output: {
                
            }
        },
        emptyOutDir: false
    },
});

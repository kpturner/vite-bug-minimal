// @ts-check
import { createServer as createViteServer, ViteDevServer } from 'vite';

const root = process.cwd();

async function createServer() {
    let vite: ViteDevServer = await createViteServer({
        root,
        logLevel: 'info',
        server: {
            middlewareMode: 'ssr',
            watch: {
                // During tests we edit the files too fast and sometimes chokidar
                // misses change events, so enforce polling for consistency
                usePolling: true,
                interval: 100
            }
        }
    });
    return { vite };
}

// for test use
exports.createServer = createServer;

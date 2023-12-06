/**
 * @type {() => import('astro').AstroIntegration}
 */

import path from 'path';
import url from 'url';

export default () => ({
    name: 'toolbar-confetti',
    hooks: {
        "astro:config:setup": ({ addDevToolbarApp }) => {
            const importPath = path.dirname(url.fileURLToPath(import.meta.url));
            const pluginPath = path.join(importPath, 'toolbar.js');

            addDevToolbarApp(pluginPath);
        }
    }
})
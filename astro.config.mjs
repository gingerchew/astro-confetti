import { defineConfig } from 'astro/config';
import AstroDevToolbarConfetti from '.';
// https://astro.build/config
export default defineConfig({
    integrations: [AstroDevToolbarConfetti()]
});

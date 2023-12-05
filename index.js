/**
 * @type {() => import('astro').AstroIntegration}
 */

export default () => ({
    name: 'toolbar-confetti',
    hooks: {
        "astro:config:setup": ({ addDevToolbarApp }) => {
            addDevToolbarApp('./toolbar.js');
        }
    }
})
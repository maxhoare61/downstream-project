import * as server from '../entries/pages/about-us/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about-us/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/about-us/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.BVAS8UY0.js","_app/immutable/chunks/CAsUI1Vc.js","_app/immutable/chunks/N84nhSPx.js","_app/immutable/chunks/rndSF6aN.js"];
export const stylesheets = ["_app/immutable/assets/3.CbjFvfWh.css"];
export const fonts = [];

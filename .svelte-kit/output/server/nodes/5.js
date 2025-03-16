import * as server from '../entries/pages/articles/article-two/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/articles/article-two/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/articles/article-two/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.CRW0NZQh.js","_app/immutable/chunks/CAsUI1Vc.js","_app/immutable/chunks/N84nhSPx.js","_app/immutable/chunks/rndSF6aN.js","_app/immutable/chunks/BMwfVSHN.js","_app/immutable/chunks/mn9GTD1c.js","_app/immutable/chunks/lh6egGIj.js","_app/immutable/chunks/C7-q4PBh.js","_app/immutable/chunks/D-kdLbdY.js"];
export const stylesheets = ["_app/immutable/assets/5.ChPRo5Im.css"];
export const fonts = [];

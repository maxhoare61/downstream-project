import * as server from '../entries/pages/articles/article-one/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/articles/article-one/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/articles/article-one/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.DamNb5CG.js","_app/immutable/chunks/0wObXGaB.js","_app/immutable/chunks/BPOaqogl.js","_app/immutable/chunks/BsuhtuCv.js","_app/immutable/chunks/Ccn_LV6S.js","_app/immutable/chunks/D5uhj9CN.js","_app/immutable/chunks/Df0MIb_m.js","_app/immutable/chunks/DwPnOOVN.js","_app/immutable/chunks/CtlptF1z.js"];
export const stylesheets = ["_app/immutable/assets/4.TTFuM-8O.css"];
export const fonts = [];

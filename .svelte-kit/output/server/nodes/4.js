import * as server from '../entries/pages/articles/article-one/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/articles/article-one/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/articles/article-one/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.Ckfn9Hv4.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/CAsUI1Vc.js","_app/immutable/chunks/N84nhSPx.js","_app/immutable/chunks/rndSF6aN.js","_app/immutable/chunks/BdjShDn4.js","_app/immutable/chunks/lh6egGIj.js","_app/immutable/chunks/C7-q4PBh.js","_app/immutable/chunks/D-kdLbdY.js","_app/immutable/chunks/BMwfVSHN.js"];
export const stylesheets = ["_app/immutable/assets/4.CrG_E9oo.css","_app/immutable/assets/ProjectCard.Cpfnn5CM.css"];
export const fonts = [];

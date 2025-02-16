import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.BzeGxo82.js","_app/immutable/chunks/BsuhtuCv.js","_app/immutable/chunks/BPOaqogl.js","_app/immutable/chunks/Ccn_LV6S.js","_app/immutable/chunks/Dv6QKi4_.js","_app/immutable/chunks/QIQhJl4H.js","_app/immutable/chunks/D5uhj9CN.js","_app/immutable/chunks/DhoBeq3A.js","_app/immutable/chunks/Bc7-Py4M.js","_app/immutable/chunks/0wObXGaB.js","_app/immutable/chunks/Df0MIb_m.js","_app/immutable/chunks/DwPnOOVN.js","_app/immutable/chunks/BISXfncL.js"];
export const stylesheets = ["_app/immutable/assets/2.BpgQTjwt.css","_app/immutable/assets/ProjectCard.WYIme-5i.css"];
export const fonts = [];

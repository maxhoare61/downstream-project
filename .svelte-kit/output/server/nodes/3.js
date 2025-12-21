import * as server from '../entries/pages/about-us/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about-us/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/about-us/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.Cey_W8Qx.js","_app/immutable/chunks/D4PfDTrR.js","_app/immutable/chunks/BBwZFZ4Q.js","_app/immutable/chunks/D952mxQ2.js","_app/immutable/chunks/DEFOvSlV.js"];
export const stylesheets = ["_app/immutable/assets/3.A-kBdGtK.css"];
export const fonts = [];

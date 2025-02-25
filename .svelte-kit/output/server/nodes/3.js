import * as server from '../entries/pages/about-us/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about-us/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/about-us/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.BHDsv1OS.js","_app/immutable/chunks/DXnFObDU.js","_app/immutable/chunks/DD4mjsJM.js","_app/immutable/chunks/CcuueaZQ.js"];
export const stylesheets = ["_app/immutable/assets/3.DDaS6YiT.css"];
export const fonts = [];

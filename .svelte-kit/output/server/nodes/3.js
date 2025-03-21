import * as server from '../entries/pages/about-us/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about-us/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/about-us/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.DFDIvO7U.js","_app/immutable/chunks/XY3dAnIK.js","_app/immutable/chunks/DwA5C2Sx.js","_app/immutable/chunks/DKWpF01t.js","_app/immutable/chunks/DeW4dALc.js","_app/immutable/chunks/B3eDsiPY.js"];
export const stylesheets = ["_app/immutable/assets/3.DXYfeaQh.css"];
export const fonts = [];

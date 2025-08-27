import * as server from '../entries/pages/about-us/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about-us/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/about-us/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.C3TrrXNZ.js","_app/immutable/chunks/DGqtx0UH.js","_app/immutable/chunks/5lW7ABz8.js","_app/immutable/chunks/BzWc-8pQ.js","_app/immutable/chunks/D0lOji1P.js","_app/immutable/chunks/DRRo3_Ok.js"];
export const stylesheets = ["_app/immutable/assets/3.D340-bcr.css"];
export const fonts = [];

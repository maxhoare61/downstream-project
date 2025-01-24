import * as server from '../entries/pages/about-us/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about-us/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/about-us/+page.server.js";
export const imports = ["_app/immutable/nodes/3.g-b12lTG.js","_app/immutable/chunks/BSoORELv.js","_app/immutable/chunks/CXh6Pbic.js","_app/immutable/chunks/CXXV37Wi.js","_app/immutable/chunks/FKwVaF6F.js","_app/immutable/chunks/Dbf8PGUb.js"];
export const stylesheets = ["_app/immutable/assets/3.Do4cKahr.css"];
export const fonts = [];

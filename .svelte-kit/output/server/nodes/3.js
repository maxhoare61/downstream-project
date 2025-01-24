import * as server from '../entries/pages/about-us/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about-us/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/about-us/+page.server.js";
export const imports = ["_app/immutable/nodes/3.0yyVz8N2.js","_app/immutable/chunks/XHkML9iF.js","_app/immutable/chunks/DzWE_ddi.js","_app/immutable/chunks/BmH5k2Sn.js","_app/immutable/chunks/9NB0C3l4.js","_app/immutable/chunks/CKksi7zM.js"];
export const stylesheets = ["_app/immutable/assets/3.Do4cKahr.css"];
export const fonts = [];

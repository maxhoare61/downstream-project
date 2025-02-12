import * as server from '../entries/pages/articles/article-one/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/articles/article-one/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/articles/article-one/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.ChPDVMLA.js","_app/immutable/chunks/ka9KkwxP.js","_app/immutable/chunks/BW6X3RMq.js","_app/immutable/chunks/CGI81kX1.js","_app/immutable/chunks/DYWxduqO.js","_app/immutable/chunks/CBun_DBB.js"];
export const stylesheets = ["_app/immutable/assets/4.BYgBz9NZ.css"];
export const fonts = [];

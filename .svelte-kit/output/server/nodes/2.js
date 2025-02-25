import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.DqB6g_Ro.js","_app/immutable/chunks/DXnFObDU.js","_app/immutable/chunks/DD4mjsJM.js","_app/immutable/chunks/CcuueaZQ.js","_app/immutable/chunks/BPim84tk.js","_app/immutable/chunks/DMlgdfBL.js","_app/immutable/chunks/Z-HGXm5L.js","_app/immutable/chunks/BQ6FiXC_.js","_app/immutable/chunks/BPM6Kjcs.js","_app/immutable/chunks/7f8r9I2t.js","_app/immutable/chunks/Czb9bWix.js","_app/immutable/chunks/CMyLQ5eM.js","_app/immutable/chunks/BpqmTQF5.js"];
export const stylesheets = ["_app/immutable/assets/2.BpgQTjwt.css","_app/immutable/assets/ProjectCard.BjHMg7Mf.css"];
export const fonts = [];

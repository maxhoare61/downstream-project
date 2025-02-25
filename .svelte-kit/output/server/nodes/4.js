import * as server from '../entries/pages/articles/article-one/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/articles/article-one/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/articles/article-one/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.DJx1G1AN.js","_app/immutable/chunks/7f8r9I2t.js","_app/immutable/chunks/DD4mjsJM.js","_app/immutable/chunks/DXnFObDU.js","_app/immutable/chunks/CcuueaZQ.js","_app/immutable/chunks/Z-HGXm5L.js","_app/immutable/chunks/Czb9bWix.js","_app/immutable/chunks/CMyLQ5eM.js","_app/immutable/chunks/BPM6Kjcs.js","_app/immutable/chunks/BpqmTQF5.js","_app/immutable/chunks/BPim84tk.js","_app/immutable/chunks/DMlgdfBL.js","_app/immutable/chunks/BQ6FiXC_.js"];
export const stylesheets = ["_app/immutable/assets/4.QMI4Si8b.css","_app/immutable/assets/ProjectCard.BjHMg7Mf.css"];
export const fonts = [];

import * as server from '../entries/pages/articles/article-two/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/articles/article-two/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/articles/article-two/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.WqNYh3xg.js","_app/immutable/chunks/DXnFObDU.js","_app/immutable/chunks/DD4mjsJM.js","_app/immutable/chunks/CcuueaZQ.js","_app/immutable/chunks/Z-HGXm5L.js","_app/immutable/chunks/Czb9bWix.js","_app/immutable/chunks/CMyLQ5eM.js","_app/immutable/chunks/BPM6Kjcs.js","_app/immutable/chunks/BPim84tk.js","_app/immutable/chunks/DMlgdfBL.js","_app/immutable/chunks/CAkxxl8Q.js","_app/immutable/chunks/1SQ-vc-7.js"];
export const stylesheets = ["_app/immutable/assets/5.VzWnAArS.css"];
export const fonts = [];

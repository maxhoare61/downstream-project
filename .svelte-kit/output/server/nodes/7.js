import * as server from '../entries/pages/articles/article-three/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/articles/article-three/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/articles/article-three/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.BK6ZLc7x.js","_app/immutable/chunks/DGqtx0UH.js","_app/immutable/chunks/5lW7ABz8.js","_app/immutable/chunks/BzWc-8pQ.js","_app/immutable/chunks/BOu9Slps.js","_app/immutable/chunks/0Lu-XDc8.js","_app/immutable/chunks/DKeQvcmg.js","_app/immutable/chunks/CqtXsPVH.js","_app/immutable/chunks/C5mFiDie.js","_app/immutable/chunks/0IwTZHX3.js","_app/immutable/chunks/tLbPkKgv.js"];
export const stylesheets = ["_app/immutable/assets/7.M1Xkhm5j.css","_app/immutable/assets/Calculator.hivzNpHG.css"];
export const fonts = [];

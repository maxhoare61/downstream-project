import * as server from '../entries/pages/articles/article-two/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/articles/article-two/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/articles/article-two/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.eP4dbz7f.js","_app/immutable/chunks/DGqtx0UH.js","_app/immutable/chunks/5lW7ABz8.js","_app/immutable/chunks/BzWc-8pQ.js","_app/immutable/chunks/BOu9Slps.js","_app/immutable/chunks/0Lu-XDc8.js","_app/immutable/chunks/DKeQvcmg.js","_app/immutable/chunks/C5mFiDie.js","_app/immutable/chunks/0IwTZHX3.js","_app/immutable/chunks/tLbPkKgv.js"];
export const stylesheets = ["_app/immutable/assets/8.BcT4pNnZ.css","_app/immutable/assets/Calculator.hivzNpHG.css"];
export const fonts = [];

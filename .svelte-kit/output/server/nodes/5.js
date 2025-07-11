import * as server from '../entries/pages/articles/article-four/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/articles/article-four/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/articles/article-four/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.CBKbT8XO.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/DGqtx0UH.js","_app/immutable/chunks/5lW7ABz8.js","_app/immutable/chunks/BzWc-8pQ.js","_app/immutable/chunks/D0lOji1P.js","_app/immutable/chunks/Bjzgw3R-.js","_app/immutable/chunks/0IwTZHX3.js","_app/immutable/chunks/tLbPkKgv.js","_app/immutable/chunks/BOu9Slps.js","_app/immutable/chunks/CqtXsPVH.js","_app/immutable/chunks/C5mFiDie.js","_app/immutable/chunks/DzNrXx7C.js"];
export const stylesheets = ["_app/immutable/assets/5.D9gLgo7O.css"];
export const fonts = [];

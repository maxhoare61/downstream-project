import * as server from '../entries/pages/articles/article-two/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/articles/article-two/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/articles/article-two/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.C5KvNo4S.js","_app/immutable/chunks/XY3dAnIK.js","_app/immutable/chunks/DwA5C2Sx.js","_app/immutable/chunks/DKWpF01t.js","_app/immutable/chunks/B3eDsiPY.js","_app/immutable/chunks/6tI0xx_i.js","_app/immutable/chunks/YE37X6u0.js","_app/immutable/chunks/QkOyKOJU.js","_app/immutable/chunks/DNM2di2G.js","_app/immutable/chunks/CsrgPRc4.js"];
export const stylesheets = ["_app/immutable/assets/6.BcT4pNnZ.css","_app/immutable/assets/Calculator.hivzNpHG.css"];
export const fonts = [];

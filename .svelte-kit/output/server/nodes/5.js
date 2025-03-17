import * as server from '../entries/pages/articles/article-three/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/articles/article-three/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/articles/article-three/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.CntOfGBd.js","_app/immutable/chunks/XY3dAnIK.js","_app/immutable/chunks/DwA5C2Sx.js","_app/immutable/chunks/DKWpF01t.js","_app/immutable/chunks/m_Jc1BPw.js","_app/immutable/chunks/DJY1Nu3a.js","_app/immutable/chunks/YE37X6u0.js","_app/immutable/chunks/QkOyKOJU.js","_app/immutable/chunks/DNM2di2G.js","_app/immutable/chunks/CsrgPRc4.js"];
export const stylesheets = ["_app/immutable/assets/5.M1Xkhm5j.css","_app/immutable/assets/Calculator.hivzNpHG.css"];
export const fonts = [];

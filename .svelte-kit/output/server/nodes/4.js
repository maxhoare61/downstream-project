import * as server from '../entries/pages/articles/article-one/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/articles/article-one/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/articles/article-one/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.CNrQCPKE.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/XY3dAnIK.js","_app/immutable/chunks/DwA5C2Sx.js","_app/immutable/chunks/DKWpF01t.js","_app/immutable/chunks/DeW4dALc.js","_app/immutable/chunks/QkOyKOJU.js","_app/immutable/chunks/DNM2di2G.js","_app/immutable/chunks/CsrgPRc4.js","_app/immutable/chunks/m_Jc1BPw.js"];
export const stylesheets = ["_app/immutable/assets/4.DyWwglc_.css","_app/immutable/assets/ProjectCard.6q5e2BUs.css"];
export const fonts = [];

import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.BFQGeSw6.js","_app/immutable/chunks/XY3dAnIK.js","_app/immutable/chunks/DwA5C2Sx.js","_app/immutable/chunks/DKWpF01t.js","_app/immutable/chunks/DeW4dALc.js","_app/immutable/chunks/DL5e9Qj9.js","_app/immutable/chunks/YE37X6u0.js","_app/immutable/chunks/BCNvZDCa.js","_app/immutable/chunks/QkOyKOJU.js","_app/immutable/chunks/C-m7fHYS.js","_app/immutable/chunks/CrQw1KKS.js","_app/immutable/chunks/B1fG5muO.js","_app/immutable/chunks/m_Jc1BPw.js","_app/immutable/chunks/DNM2di2G.js","_app/immutable/chunks/CsrgPRc4.js","_app/immutable/chunks/CbUS1MUy.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/C2c9D6pS.js"];
export const stylesheets = ["_app/immutable/assets/2.V9D04BWu.css","_app/immutable/assets/ProjectCard.6q5e2BUs.css"];
export const fonts = [];

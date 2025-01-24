import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.2uFs-Sj6.js","_app/immutable/chunks/XHkML9iF.js","_app/immutable/chunks/DzWE_ddi.js","_app/immutable/chunks/BmH5k2Sn.js","_app/immutable/chunks/B1PbRolo.js","_app/immutable/chunks/CoGNq-27.js","_app/immutable/chunks/BD_E_55i.js","_app/immutable/chunks/Chl_3Gad.js","_app/immutable/chunks/DdcpUOxD.js","_app/immutable/chunks/CkPax-wO.js","_app/immutable/chunks/9NB0C3l4.js","_app/immutable/chunks/CKksi7zM.js","_app/immutable/chunks/Bvjbe7f4.js"];
export const stylesheets = ["_app/immutable/assets/2.BpgQTjwt.css","_app/immutable/assets/ProjectCard.DvWKnTle.css"];
export const fonts = [];

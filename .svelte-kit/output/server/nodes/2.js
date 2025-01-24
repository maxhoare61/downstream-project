import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.BqaRK239.js","_app/immutable/chunks/BSoORELv.js","_app/immutable/chunks/CXh6Pbic.js","_app/immutable/chunks/CXXV37Wi.js","_app/immutable/chunks/CZoHumtT.js","_app/immutable/chunks/CoUAylBK.js","_app/immutable/chunks/CFSNHIOO.js","_app/immutable/chunks/CCYeOIUp.js","_app/immutable/chunks/k_m1u21n.js","_app/immutable/chunks/FKwVaF6F.js","_app/immutable/chunks/Dbf8PGUb.js","_app/immutable/chunks/Ch5rybQc.js"];
export const stylesheets = ["_app/immutable/assets/2.BpgQTjwt.css","_app/immutable/assets/ProjectCard.DvWKnTle.css"];
export const fonts = [];

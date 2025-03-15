import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.BnyOkJpu.js","_app/immutable/chunks/DMl8LHv4.js","_app/immutable/chunks/DzkEQQzb.js","_app/immutable/chunks/EOeWq-Np.js","_app/immutable/chunks/B_enjVDI.js","_app/immutable/chunks/BdObXAAd.js","_app/immutable/chunks/fYeS2gGH.js","_app/immutable/chunks/CydCMTb6.js","_app/immutable/chunks/Jhlp73W7.js","_app/immutable/chunks/DNWvHczP.js","_app/immutable/chunks/3YygtruM.js","_app/immutable/chunks/C5HbSDIh.js","_app/immutable/chunks/D6STZdQV.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/DXUeZs96.js"];
export const stylesheets = ["_app/immutable/assets/2.D7GE0cJh.css","_app/immutable/assets/ProjectCard.RZRnpOus.css"];
export const fonts = [];

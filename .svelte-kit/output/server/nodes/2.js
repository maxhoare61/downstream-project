import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.BjbuKQuU.js","_app/immutable/chunks/CAsUI1Vc.js","_app/immutable/chunks/N84nhSPx.js","_app/immutable/chunks/rndSF6aN.js","_app/immutable/chunks/H9lVyFwr.js","_app/immutable/chunks/mn9GTD1c.js","_app/immutable/chunks/DttLfJ2O.js","_app/immutable/chunks/BdjShDn4.js","_app/immutable/chunks/lh6egGIj.js","_app/immutable/chunks/DquVoF9p.js","_app/immutable/chunks/BMwfVSHN.js","_app/immutable/chunks/C7-q4PBh.js","_app/immutable/chunks/D-kdLbdY.js","_app/immutable/chunks/CY2uch1Q.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/sAbTurJv.js"];
export const stylesheets = ["_app/immutable/assets/2.DoLp0Z7M.css","_app/immutable/assets/ProjectCard.Cpfnn5CM.css"];
export const fonts = [];

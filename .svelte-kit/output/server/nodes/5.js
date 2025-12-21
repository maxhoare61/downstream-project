import * as server from '../entries/pages/publications/art_01/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/publications/art_01/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/publications/art_01/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.BvQaJsE_.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/D4PfDTrR.js","_app/immutable/chunks/BBwZFZ4Q.js","_app/immutable/chunks/D952mxQ2.js","_app/immutable/chunks/Bt9LHaUt.js","_app/immutable/chunks/DvFi6UcI.js","_app/immutable/chunks/gb8GQDW0.js","_app/immutable/chunks/Bm8VeX-P.js","_app/immutable/chunks/C7Ccb2ak.js","_app/immutable/chunks/DEFOvSlV.js","_app/immutable/chunks/TyDtiSqp.js"];
export const stylesheets = ["_app/immutable/assets/5.CDQAeKrV.css"];
export const fonts = [];

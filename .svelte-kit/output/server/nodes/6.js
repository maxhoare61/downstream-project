import * as server from '../entries/pages/publications/art_04/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/publications/art_04/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/publications/art_04/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.ULJ2l0RS.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/D4PfDTrR.js","_app/immutable/chunks/BBwZFZ4Q.js","_app/immutable/chunks/D952mxQ2.js","_app/immutable/chunks/DvFi6UcI.js","_app/immutable/chunks/Bm8VeX-P.js","_app/immutable/chunks/Cc8LCm7E.js","_app/immutable/chunks/dSK9R9Ys.js","_app/immutable/chunks/9BondkEG.js","_app/immutable/chunks/gb8GQDW0.js","_app/immutable/chunks/DzNrXx7C.js"];
export const stylesheets = ["_app/immutable/assets/6.BjLbx5wT.css"];
export const fonts = [];

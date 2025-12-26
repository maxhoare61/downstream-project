import * as server from '../entries/pages/publications/article-two/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/publications/article-two/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/publications/article-two/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.BrIqEE_E.js","_app/immutable/chunks/D4PfDTrR.js","_app/immutable/chunks/BBwZFZ4Q.js","_app/immutable/chunks/D952mxQ2.js","_app/immutable/chunks/DtWNj1SS.js","_app/immutable/chunks/DFsEGFG-.js","_app/immutable/chunks/C-Xd0lSa.js","_app/immutable/chunks/gb8GQDW0.js","_app/immutable/chunks/Bm8VeX-P.js","_app/immutable/chunks/C7Ccb2ak.js"];
export const stylesheets = ["_app/immutable/assets/10.BcT4pNnZ.css","_app/immutable/assets/Calculator.hivzNpHG.css"];
export const fonts = [];

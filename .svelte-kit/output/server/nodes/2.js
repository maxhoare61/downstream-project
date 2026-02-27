import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.Cx_QDMDz.js","_app/immutable/chunks/D4PfDTrR.js","_app/immutable/chunks/BBwZFZ4Q.js","_app/immutable/chunks/D952mxQ2.js","_app/immutable/chunks/DNYEyWNH.js","_app/immutable/chunks/DomR7J3w.js","_app/immutable/chunks/C-Xd0lSa.js","_app/immutable/chunks/BaLy3aCV.js","_app/immutable/chunks/Bt9LHaUt.js","_app/immutable/chunks/CgpzC4Oa.js","_app/immutable/chunks/C1dGOTeK.js","_app/immutable/chunks/Rnr6evyE.js","_app/immutable/chunks/gb8GQDW0.js","_app/immutable/chunks/dSK9R9Ys.js","_app/immutable/chunks/Bm8VeX-P.js","_app/immutable/chunks/Cc8LCm7E.js","_app/immutable/chunks/Cmw4Zz-3.js","_app/immutable/chunks/DzNrXx7C.js","_app/immutable/chunks/C1FmrZbK.js"];
export const stylesheets = ["_app/immutable/assets/2.D8aH6vRM.css","_app/immutable/assets/articles.BePfibe-.css"];
export const fonts = [];

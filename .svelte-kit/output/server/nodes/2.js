import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.zPxpb9S_.js","_app/immutable/chunks/DGqtx0UH.js","_app/immutable/chunks/5lW7ABz8.js","_app/immutable/chunks/BzWc-8pQ.js","_app/immutable/chunks/DUaeSM_-.js","_app/immutable/chunks/Bnb1prmT.js","_app/immutable/chunks/DKeQvcmg.js","_app/immutable/chunks/CgUfm643.js","_app/immutable/chunks/D0lOji1P.js","_app/immutable/chunks/V6w2CZNC.js","_app/immutable/chunks/Cn8mQ5Lj.js","_app/immutable/chunks/9UI3birS.js","_app/immutable/chunks/C5mFiDie.js","_app/immutable/chunks/C99JdHeE.js","_app/immutable/chunks/0IwTZHX3.js","_app/immutable/chunks/tLbPkKgv.js","_app/immutable/chunks/CtYR9gWI.js","_app/immutable/chunks/DzNrXx7C.js","_app/immutable/chunks/C1FmrZbK.js"];
export const stylesheets = ["_app/immutable/assets/2.CqPZkMv9.css","_app/immutable/assets/articles.BePfibe-.css"];
export const fonts = [];

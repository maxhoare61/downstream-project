import * as server from '../entries/pages/articles/article-one/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/articles/article-one/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/articles/article-one/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.CqcX_dBv.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/D8m06CPG.js","_app/immutable/chunks/DkuR2h71.js","_app/immutable/chunks/AQ7DHXwo.js","_app/immutable/chunks/hsJoLx5p.js","_app/immutable/chunks/BpE8ltH5.js","_app/immutable/chunks/CcEQqNw6.js","_app/immutable/chunks/DVy7si5e.js","_app/immutable/chunks/DJ06FuHk.js"];
export const stylesheets = ["_app/immutable/assets/4.hCAL9rof.css"];
export const fonts = [];

import * as server from '../entries/pages/articles/article-two/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/articles/article-two/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/articles/article-two/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.Bk6eL_rY.js","_app/immutable/chunks/DtvuHSV8.js","_app/immutable/chunks/xe0Jbztq.js","_app/immutable/chunks/C2_e1wUC.js","_app/immutable/chunks/C9PHXXTp.js","_app/immutable/chunks/BpF21oOu.js","_app/immutable/chunks/CAYQQzGp.js","_app/immutable/chunks/DuaN_xK-.js","_app/immutable/chunks/rzUihhwI.js","_app/immutable/chunks/DY9JD3L4.js","_app/immutable/chunks/BlHi_elb.js","_app/immutable/chunks/DXHlFID5.js","_app/immutable/chunks/Cq1hbX1J.js"];
export const stylesheets = ["_app/immutable/assets/5.CfGQVkaA.css"];
export const fonts = [];

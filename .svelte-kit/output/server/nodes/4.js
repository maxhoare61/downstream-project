import * as server from '../entries/pages/articles/article-one/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/articles/article-one/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/articles/article-one/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.CcfmE414.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/DtvuHSV8.js","_app/immutable/chunks/xe0Jbztq.js","_app/immutable/chunks/C2_e1wUC.js","_app/immutable/chunks/CM8Sptct.js","_app/immutable/chunks/Cq1hbX1J.js","_app/immutable/chunks/C9PHXXTp.js","_app/immutable/chunks/BpF21oOu.js","_app/immutable/chunks/CAYQQzGp.js","_app/immutable/chunks/IIKUV99X.js","_app/immutable/chunks/DuaN_xK-.js","_app/immutable/chunks/rzUihhwI.js","_app/immutable/chunks/BFpxVSon.js"];
export const stylesheets = ["_app/immutable/assets/4.Cx0kFpsO.css","_app/immutable/assets/ProjectCard.b0ccUKqA.css"];
export const fonts = [];

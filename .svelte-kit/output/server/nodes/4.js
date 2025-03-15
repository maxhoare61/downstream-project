import * as server from '../entries/pages/articles/article-one/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/articles/article-one/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/articles/article-one/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.B9vWZLvG.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/DMl8LHv4.js","_app/immutable/chunks/DzkEQQzb.js","_app/immutable/chunks/EOeWq-Np.js","_app/immutable/chunks/fYeS2gGH.js","_app/immutable/chunks/3YygtruM.js","_app/immutable/chunks/C5HbSDIh.js","_app/immutable/chunks/D6STZdQV.js","_app/immutable/chunks/DNWvHczP.js"];
export const stylesheets = ["_app/immutable/assets/4.BRB5d4yL.css","_app/immutable/assets/ProjectCard.RZRnpOus.css"];
export const fonts = [];

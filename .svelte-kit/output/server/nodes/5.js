import * as server from '../entries/pages/articles/article-two/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/articles/article-two/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/articles/article-two/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.BPnPsMJk.js","_app/immutable/chunks/DMl8LHv4.js","_app/immutable/chunks/DzkEQQzb.js","_app/immutable/chunks/EOeWq-Np.js","_app/immutable/chunks/DNWvHczP.js","_app/immutable/chunks/B_enjVDI.js","_app/immutable/chunks/BdObXAAd.js","_app/immutable/chunks/Cq_vkV2p.js","_app/immutable/chunks/BvqbqQ8V.js","_app/immutable/chunks/Jhlp73W7.js","_app/immutable/chunks/3YygtruM.js","_app/immutable/chunks/C5HbSDIh.js","_app/immutable/chunks/D6STZdQV.js"];
export const stylesheets = ["_app/immutable/assets/5.CnpyA_o2.css"];
export const fonts = [];

import * as server from '../entries/pages/articles/article-two/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/articles/article-two/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/articles/article-two/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.K15vVpH6.js","_app/immutable/chunks/D8m06CPG.js","_app/immutable/chunks/DkuR2h71.js","_app/immutable/chunks/AQ7DHXwo.js","_app/immutable/chunks/DJ06FuHk.js","_app/immutable/chunks/CAGX9k1L.js","_app/immutable/chunks/Ctx4Pf3h.js","_app/immutable/chunks/BpE8ltH5.js","_app/immutable/chunks/CcEQqNw6.js","_app/immutable/chunks/DVy7si5e.js"];
export const stylesheets = ["_app/immutable/assets/6.BcT4pNnZ.css","_app/immutable/assets/Calculator.hivzNpHG.css"];
export const fonts = [];

import * as server from '../entries/pages/about-us/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about-us/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/about-us/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.BZwk9LlT.js","_app/immutable/chunks/D8m06CPG.js","_app/immutable/chunks/DkuR2h71.js","_app/immutable/chunks/AQ7DHXwo.js","_app/immutable/chunks/hsJoLx5p.js","_app/immutable/chunks/DJ06FuHk.js"];
export const stylesheets = ["_app/immutable/assets/3.DXYfeaQh.css"];
export const fonts = [];

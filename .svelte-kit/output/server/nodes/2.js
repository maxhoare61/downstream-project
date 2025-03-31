import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.CUmMpN9F.js","_app/immutable/chunks/D8m06CPG.js","_app/immutable/chunks/DkuR2h71.js","_app/immutable/chunks/AQ7DHXwo.js","_app/immutable/chunks/hsJoLx5p.js","_app/immutable/chunks/CqNWsa6F.js","_app/immutable/chunks/Ctx4Pf3h.js","_app/immutable/chunks/DyP0Hlkv.js","_app/immutable/chunks/BpE8ltH5.js","_app/immutable/chunks/PXt0EZiu.js","_app/immutable/chunks/ksjtCClb.js","_app/immutable/chunks/Clw94ien.js","_app/immutable/chunks/DJ06FuHk.js","_app/immutable/chunks/CcEQqNw6.js","_app/immutable/chunks/DVy7si5e.js","_app/immutable/chunks/BGtLF1Fj.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/ZHt4u870.js"];
export const stylesheets = ["_app/immutable/assets/2.DHtinVs8.css","_app/immutable/assets/ProjectCard.6q5e2BUs.css"];
export const fonts = [];

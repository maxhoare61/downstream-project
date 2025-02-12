import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.HuTbNHwZ.js","_app/immutable/chunks/ka9KkwxP.js","_app/immutable/chunks/BW6X3RMq.js","_app/immutable/chunks/CGI81kX1.js","_app/immutable/chunks/-2LoH5so.js","_app/immutable/chunks/BJ8icIrJ.js","_app/immutable/chunks/B5z126Zn.js","_app/immutable/chunks/CtE9GlRU.js","_app/immutable/chunks/UX9YJpLc.js","_app/immutable/chunks/DmOdj0mq.js","_app/immutable/chunks/DYWxduqO.js","_app/immutable/chunks/CBun_DBB.js","_app/immutable/chunks/D23CpDdD.js"];
export const stylesheets = ["_app/immutable/assets/2.BpgQTjwt.css","_app/immutable/assets/ProjectCard.WYIme-5i.css"];
export const fonts = [];

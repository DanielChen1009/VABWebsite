import * as server from '../entries/pages/admin/login/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/login/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/login/+page.server.js";
export const imports = ["_app/immutable/nodes/4.02d59332.js","_app/immutable/chunks/scheduler.c011984b.js","_app/immutable/chunks/index.9a9f48a2.js"];
export const stylesheets = [];
export const fonts = [];

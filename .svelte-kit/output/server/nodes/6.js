import * as server from '../entries/pages/join-us/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/join-us/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/join-us/+page.server.js";
export const imports = ["_app/immutable/nodes/6.d05d4875.js","_app/immutable/chunks/scheduler.c011984b.js","_app/immutable/chunks/index.9a9f48a2.js","_app/immutable/chunks/Menu.b8e7517b.js","_app/immutable/chunks/singletons.551347f7.js"];
export const stylesheets = ["_app/immutable/assets/6.bdfc6dd7.css","_app/immutable/assets/Menu.df61181d.css"];
export const fonts = [];

import * as server from '../entries/pages/join-us/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/join-us/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/join-us/+page.server.js";
export const imports = ["_app/immutable/nodes/6.6417fdbd.js","_app/immutable/chunks/scheduler.c011984b.js","_app/immutable/chunks/index.9a9f48a2.js","_app/immutable/chunks/Menu.2e1e399c.js","_app/immutable/chunks/singletons.5a727956.js"];
export const stylesheets = ["_app/immutable/assets/6.bbc9c292.css","_app/immutable/assets/Menu.70b0b099.css"];
export const fonts = [];

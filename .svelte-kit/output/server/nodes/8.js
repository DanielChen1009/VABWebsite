

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/members-partners/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.7ef4260b.js","_app/immutable/chunks/scheduler.c011984b.js","_app/immutable/chunks/index.9a9f48a2.js","_app/immutable/chunks/Menu.2e1e399c.js","_app/immutable/chunks/singletons.5a727956.js"];
export const stylesheets = ["_app/immutable/assets/Menu.70b0b099.css"];
export const fonts = [];

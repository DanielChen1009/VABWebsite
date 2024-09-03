

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/founder/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.37b311d9.js","_app/immutable/chunks/scheduler.c011984b.js","_app/immutable/chunks/index.9a9f48a2.js","_app/immutable/chunks/Menu.76538692.js","_app/immutable/chunks/singletons.9d41a397.js"];
export const stylesheets = ["_app/immutable/assets/5.f66a9578.css","_app/immutable/assets/Menu.70b0b099.css"];
export const fonts = [];

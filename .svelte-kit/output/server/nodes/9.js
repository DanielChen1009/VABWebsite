

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sponsors-clients/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.38c8bc7b.js","_app/immutable/chunks/scheduler.c011984b.js","_app/immutable/chunks/index.9a9f48a2.js","_app/immutable/chunks/Menu.b8f2ae05.js","_app/immutable/chunks/singletons.50ab7644.js"];
export const stylesheets = ["_app/immutable/assets/Menu.6306ac12.css"];
export const fonts = [];

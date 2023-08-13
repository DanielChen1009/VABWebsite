

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.d216d7e5.js","_app/immutable/chunks/scheduler.c011984b.js","_app/immutable/chunks/index.9a9f48a2.js","_app/immutable/chunks/Menu.b8e7517b.js","_app/immutable/chunks/singletons.551347f7.js"];
export const stylesheets = ["_app/immutable/assets/2.8f5a63a6.css","_app/immutable/assets/Menu.df61181d.css"];
export const fonts = [];

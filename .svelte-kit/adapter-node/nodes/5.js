

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/founder/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.f6951058.js","_app/immutable/chunks/scheduler.c011984b.js","_app/immutable/chunks/index.9a9f48a2.js","_app/immutable/chunks/Menu.b8e7517b.js","_app/immutable/chunks/singletons.551347f7.js"];
export const stylesheets = ["_app/immutable/assets/5.b0bd13db.css","_app/immutable/assets/Menu.df61181d.css"];
export const fonts = [];

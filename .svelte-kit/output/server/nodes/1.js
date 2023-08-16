

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.33f97f34.js","_app/immutable/chunks/scheduler.c011984b.js","_app/immutable/chunks/index.9a9f48a2.js","_app/immutable/chunks/stores.f666a323.js","_app/immutable/chunks/singletons.f10cbd9b.js"];
export const stylesheets = [];
export const fonts = [];

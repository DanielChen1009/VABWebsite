

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.7e088c8b.js","_app/immutable/chunks/scheduler.c011984b.js","_app/immutable/chunks/index.9a9f48a2.js","_app/immutable/chunks/stores.fae014c5.js","_app/immutable/chunks/singletons.a482cd07.js"];
export const stylesheets = ["_app/immutable/assets/0.4e3ca098.css"];
export const fonts = [];

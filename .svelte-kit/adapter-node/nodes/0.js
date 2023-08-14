

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.d18e21e7.js","_app/immutable/chunks/scheduler.c011984b.js","_app/immutable/chunks/index.9a9f48a2.js","_app/immutable/chunks/stores.ca045ae0.js","_app/immutable/chunks/singletons.44627a14.js"];
export const stylesheets = ["_app/immutable/assets/0.915b2093.css"];
export const fonts = [];



export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/what-we-do/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.2332c726.js","_app/immutable/chunks/scheduler.c011984b.js","_app/immutable/chunks/index.9a9f48a2.js","_app/immutable/chunks/Menu.d75db866.js","_app/immutable/chunks/singletons.a482cd07.js","_app/immutable/chunks/InfoBox.f86ab322.js"];
export const stylesheets = ["_app/immutable/assets/10.661f555e.css","_app/immutable/assets/Menu.6306ac12.css"];
export const fonts = [];

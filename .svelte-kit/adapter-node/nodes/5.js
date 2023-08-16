

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/founder/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.76a221c2.js","_app/immutable/chunks/scheduler.c011984b.js","_app/immutable/chunks/index.9a9f48a2.js","_app/immutable/chunks/Menu.412dfc65.js","_app/immutable/chunks/singletons.f10cbd9b.js"];
export const stylesheets = ["_app/immutable/assets/5.b013bded.css","_app/immutable/assets/Menu.6306ac12.css"];
export const fonts = [];

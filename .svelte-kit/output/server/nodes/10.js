

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/what-we-do/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.f790e319.js","_app/immutable/chunks/scheduler.c011984b.js","_app/immutable/chunks/index.9a9f48a2.js","_app/immutable/chunks/Menu.b8e7517b.js","_app/immutable/chunks/singletons.551347f7.js","_app/immutable/chunks/InfoBox.f86ab322.js"];
export const stylesheets = ["_app/immutable/assets/10.910fb0eb.css","_app/immutable/assets/Menu.df61181d.css"];
export const fonts = [];

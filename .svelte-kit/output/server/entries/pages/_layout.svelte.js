import { c as create_ssr_component, b as subscribe } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{padding:0;margin:0}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<header data-svelte-h="svelte-1fpixj8"></header> <main>${slots.default ? slots.default({}) : ``}</main> ${!$page.url.pathname.toString().includes("/admin") ? ` ` : ``}`;
});
export {
  Layout as default
};

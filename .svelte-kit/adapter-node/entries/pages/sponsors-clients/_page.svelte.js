import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { M as Menu } from "../../../chunks/Menu.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Menu, "Menu").$$render($$result, { includeMainLogo: false }, {}, {})}`;
});
export {
  Page as default
};

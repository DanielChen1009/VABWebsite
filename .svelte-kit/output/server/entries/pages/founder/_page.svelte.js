import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { M as Menu } from "../../../chunks/Menu.js";
Promise.resolve();
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.timelineimg.svelte-1asquio{width:97%}.timeimgwrapper.svelte-1asquio{display:flex;width:60%;background-color:#980000;margin:0}.centerleft.svelte-1asquio{left:4vw}.centerright.svelte-1asquio{right:4vw}.content.svelte-1asquio{position:relative;color:black;font-size:2.5vh;font-family:"Open Sans", sans-serif;font-weight:300;line-height:32px;letter-spacing:0.40px;word-wrap:break-word;text-align:left;background-color:#D9D9D9;padding:2vh 2vw 2vh 2vw}.age.svelte-1asquio{display:inline-block;color:white;font-size:2vh;font-family:"Open Sans", sans-serif;font-weight:700;line-height:32px;letter-spacing:0.36px;word-wrap:break-word;background-color:#980000;padding:0 1vw 0 1vw}.entrycontainer.svelte-1asquio{display:block;position:absolute;width:40vw}.black.svelte-1asquio{background-color:black}.red.svelte-1asquio{background-color:#980000}.dot.svelte-1asquio{position:absolute;border-radius:2.5vw;width:5vw;height:5vw}.center.svelte-1asquio{left:50%;transform:translateX(-50%)}.midline.svelte-1asquio{position:relative;height:282.5vh;width:1%;background-color:black;top:0}.timelinewrapper.svelte-1asquio{position:relative;height:350vh;width:100%}.bannersize.svelte-1asquio{width:100%;height:47vh}.circle.svelte-1asquio{position:absolute;top:50vh;width:10vw;height:10vw;border-radius:5vw;transform:translate(-50%, -50%)}.title.svelte-1asquio{position:absolute;top:0;left:0;z-index:20;color:white;font-size:10vw;font-family:"Unica One", cursive;font-weight:400;line-height:100%;letter-spacing:6.65px;word-wrap:break-word;text-align:center;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.5)}.bannerimg.svelte-1asquio{display:block;float:left;padding:0;margin:0}.imgwrapper.svelte-1asquio{display:flex;position:absolute;justify-content:center;overflow:hidden}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Unica+One&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">  ${``} ${validate_component(Menu, "Menu").$$render($$result, { includeMainLogo: false }, {}, {})}`;
});
export {
  Page as default
};

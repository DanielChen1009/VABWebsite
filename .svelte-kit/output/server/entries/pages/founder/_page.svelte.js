import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { M as Menu } from "../../../chunks/Menu.js";
Promise.resolve();
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.timelineimg.svelte-790uwh{width:97%}.timeimgwrapper.svelte-790uwh{display:flex;width:60%;background-color:#FF2700;margin:0}.centerleft.svelte-790uwh{left:4vw}.centerright.svelte-790uwh{right:4vw}.content.svelte-790uwh{position:relative;color:black;font-size:2.5vh;font-family:"Open Sans", sans-serif;font-weight:300;line-height:32px;letter-spacing:0.40px;word-wrap:break-word;text-align:left;background-color:#D9D9D9;padding:2vh 2vw 2vh 2vw}.age.svelte-790uwh{display:inline-block;color:white;font-size:2vh;font-family:"Open Sans", sans-serif;font-weight:700;line-height:32px;letter-spacing:0.36px;word-wrap:break-word;background-color:rgba(255, 39, 0, 0.80);padding:0 1vw 0 1vw}.entrycontainer.svelte-790uwh{display:block;position:absolute;width:40vw}.black.svelte-790uwh{background-color:black}.orange.svelte-790uwh{background-color:#FF4D2D}.dot.svelte-790uwh{position:absolute;border-radius:2.5vw;width:5vw;height:5vw}.center.svelte-790uwh{left:50%;transform:translateX(-50%)}.midline.svelte-790uwh{position:relative;height:282.5vh;width:1%;background-color:black;top:0}.timelinewrapper.svelte-790uwh{position:relative;height:350vh;width:100vw}.bannersize.svelte-790uwh{width:100vw;height:47vh}.circle.svelte-790uwh{position:absolute;top:50vh;left:50vw;width:10vw;transform:translate(-50%, -50%)}.title.svelte-790uwh{position:absolute;top:0;left:0;z-index:20;color:white;font-size:15vh;font-family:"Unica One", cursive;font-weight:400;line-height:100%;letter-spacing:6.65px;word-wrap:break-word;text-align:center;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.5)}.bannerimg.svelte-790uwh{display:block;float:left;padding:0;margin:0}.imgwrapper.svelte-790uwh{display:flex;position:absolute;justify-content:center;overflow:hidden}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Unica+One&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">  ${``} ${validate_component(Menu, "Menu").$$render($$result, { includeMainLogo: false }, {}, {})}`;
});
export {
  Page as default
};

import { c as create_ssr_component, e as escape, n as null_to_empty, b as add_attribute } from "./ssr.js";
const hamburger = "/_app/immutable/assets/hamburger.e38d2e0a.svg";
const logotxt = "/_app/immutable/assets/logotxt.b27386c3.png";
const VABLogo = "/_app/immutable/assets/VABLogo.e09cc8ea.png";
const Menu_svelte_svelte_type_style_lang = "";
const css = {
  code: '.menu.svelte-1y2xgy7{position:fixed;top:0;left:0;width:35vh;background-color:rgba(0, 0, 0, 0.5);height:100vh;z-index:99}.centering.svelte-1y2xgy7{position:relative;text-align:center;height:100%}.minilogoimg.svelte-1y2xgy7{width:40%;margin-right:5%}.minilogotxt.svelte-1y2xgy7{position:relative;width:40%;top:-15%}.minilogo.svelte-1y2xgy7{height:16.7vh;color:white;margin-bottom:2vh;padding-bottom:2vh;border-bottom:2px solid #980000}.bolden.svelte-1y2xgy7{font-weight:bolder !important}.pagenavbut.svelte-1y2xgy7{width:100%;height:9vh;background-color:transparent;border:0;color:white;display:flex;align-items:center;text-align:left;font-size:3vh;font-family:"Kumbh Sans", sans-serif;font-weight:200;line-height:110%;letter-spacing:3px;padding-left:2vw;padding-bottom:1vw;padding-top:1vw}.pagenavbut.svelte-1y2xgy7:hover{background-color:rgba(255, 255, 255, 0.3)}.dimmer.svelte-1y2xgy7{position:fixed;top:0;left:0;background-color:rgba(0, 0, 0, 0.5);width:100vw;min-height:100vh;height:fit-content;z-index:98}.hamburger.svelte-1y2xgy7{position:fixed;top:1vh;left:3vh;width:8vh;z-index:99}@media only screen and (min-width: 768px){.logoimg.svelte-1y2xgy7{position:absolute;top:2.5vw;left:34vw;height:14vw;z-index:3}.logotxt.svelte-1y2xgy7{position:absolute;top:5vw;left:48vw;height:10vw;z-index:3}}@media only screen and (max-width: 768px){.logoimg.svelte-1y2xgy7{position:absolute;top:20vh;left:20vw;height:30vw;z-index:3}.logotxt.svelte-1y2xgy7{position:absolute;top:22.5vh;left:48vw;height:20vw;z-index:3}}.blurb.svelte-1y2xgy7{position:absolute;left:15vw;top:80vh;width:70vw}',
  map: null
};
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { includeMainLogo } = $$props;
  if ($$props.includeMainLogo === void 0 && $$bindings.includeMainLogo && includeMainLogo !== void 0)
    $$bindings.includeMainLogo(includeMainLogo);
  $$result.css.add(css);
  return `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Unica+One&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">  ${includeMainLogo ? `<img class="${escape(null_to_empty("logoimg dimmed"), true) + " svelte-1y2xgy7"}"${add_attribute("src", VABLogo, 0)}> <img class="${escape(null_to_empty("logotxt dimmed"), true) + " svelte-1y2xgy7"}"${add_attribute("src", logotxt, 0)}>` : ``} ${`<img class="hamburger svelte-1y2xgy7"${add_attribute("src", hamburger, 0)}>`} ${includeMainLogo ? `${`<img class="logotxt svelte-1y2xgy7"${add_attribute("src", logotxt, 0)}> <img class="logoimg svelte-1y2xgy7"${add_attribute("src", VABLogo, 0)}>`}` : ``} ${``}`;
});
export {
  Menu as M
};

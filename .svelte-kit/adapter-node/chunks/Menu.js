import { c as create_ssr_component, e as escape, n as null_to_empty, b as add_attribute } from "./ssr.js";
const hamburger = "/_app/immutable/assets/hamburger.e38d2e0a.svg";
const logotxt = "/_app/immutable/assets/logotxt.b27386c3.png";
const VABLogo = "/_app/immutable/assets/VABLogo.e09cc8ea.png";
const Menu_svelte_svelte_type_style_lang = "";
const css = {
  code: '.menu.svelte-154wv8o{position:fixed;top:0;left:0;width:35vh;background-color:rgba(0, 0, 0, 0.5);height:100vh;z-index:99}.centering.svelte-154wv8o{position:relative;text-align:center;height:100%}.minilogoimg.svelte-154wv8o{width:40%;margin-right:5%}.minilogotxt.svelte-154wv8o{position:relative;width:40%;top:-15%}.minilogo.svelte-154wv8o{height:16.7vh;color:white;margin-bottom:2vh;padding-bottom:2vh;border-bottom:2px solid #980000}.dimmed.svelte-154wv8o{filter:brightness(50%)}.bolden.svelte-154wv8o{font-weight:bolder !important}.pagenavbut.svelte-154wv8o{width:100%;height:9vh;background-color:transparent;border:0;color:white;display:flex;align-items:center;text-align:left;font-size:3vh;font-family:"Kumbh Sans", sans-serif;font-weight:200;line-height:110%;letter-spacing:3px;padding-left:2vw;padding-bottom:1vw;padding-top:1vw}.pagenavbut.svelte-154wv8o:hover{background-color:rgba(255, 255, 255, 0.3)}.dimmer.svelte-154wv8o{position:fixed;top:0;left:0;background-color:rgba(0, 0, 0, 0.5);width:100vw;height:100vh;z-index:98}.hamburger.svelte-154wv8o{position:fixed;top:1vh;left:3vw;width:5vw;z-index:99}.logoimg.svelte-154wv8o{position:absolute;top:2.5vw;left:34vw;height:14vw;z-index:3}.logotxt.svelte-154wv8o{position:absolute;top:5vw;left:48vw;height:10vw;z-index:3}.blurb.svelte-154wv8o{position:absolute;left:15vw;top:80vh;width:70vw}',
  map: null
};
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { includeMainLogo } = $$props;
  if ($$props.includeMainLogo === void 0 && $$bindings.includeMainLogo && includeMainLogo !== void 0)
    $$bindings.includeMainLogo(includeMainLogo);
  $$result.css.add(css);
  return `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Unica+One&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">  ${includeMainLogo ? `<img class="${escape(null_to_empty("logoimg dimmed"), true) + " svelte-154wv8o"}"${add_attribute("src", VABLogo, 0)}> <img class="${escape(null_to_empty("logotxt dimmed"), true) + " svelte-154wv8o"}"${add_attribute("src", logotxt, 0)}>` : ``} ${`<img class="hamburger svelte-154wv8o"${add_attribute("src", hamburger, 0)}>`} ${includeMainLogo ? `${`<img class="logotxt svelte-154wv8o"${add_attribute("src", logotxt, 0)}> <img class="logoimg svelte-154wv8o"${add_attribute("src", VABLogo, 0)}>`}` : ``} ${``}`;
});
export {
  Menu as M
};

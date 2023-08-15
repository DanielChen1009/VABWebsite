import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { M as Menu } from "../../../chunks/Menu.js";
const InfoBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { transform } = $$props;
  let { src } = $$props;
  let { id } = $$props;
  let { top = 50 } = $$props;
  if ($$props.transform === void 0 && $$bindings.transform && transform !== void 0)
    $$bindings.transform(transform);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  return `<div role="presentation"><img${add_attribute("id", id, 0)}${add_attribute("src", src, 0)} alt="" style="${"position: absolute; transform: translateX(-50%) ; height: 100%; object-fit: cover; width: 100%; object-position: 50% " + escape(top, true) + "%"}"> ${``}</div>`;
});
const banner = "/_app/immutable/assets/banner.39426614.png";
const alanpfp = "/_app/immutable/assets/alanpfp.8c258d53.jpeg";
const alvinpfp = "/_app/immutable/assets/alvinpfp.33248e47.jpeg";
const antoniapfp = "/_app/immutable/assets/antoniapfp.fc3bae45.png";
const christinepfp = "/_app/immutable/assets/christinepfp.bb3bace0.png";
const cindypfp = "/_app/immutable/assets/cindypfp.ad8cf785.png";
const danielpfp = "/_app/immutable/assets/danielpfp.c59b8cf2.jpeg";
const haripfp = "/_app/immutable/assets/haripfp.9a0ffcdd.png";
const shasipfp = "/_app/immutable/assets/shasipfp.8ac39648.jpeg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.textinfo.svelte-77x27v{color:black;font-size:1.8vh;font-family:"Open Sans", sans-serif;font-weight:320;line-height:30px;letter-spacing:100%;word-wrap:break-word;position:absolute;height:100%;background-color:rgba(255, 255, 255, 0.9);text-align:left;padding:5%}.titlecontainer.svelte-77x27v{color:white;font-size:90%;font-family:"Open Sans", sans-serif;font-weight:700;line-height:100%;letter-spacing:1.40px;word-wrap:break-word;background-color:rgba(152, 0, 0, 0.80);position:relative;height:15%;width:100%;display:flex;justify-content:center;align-items:center;text-align:center}.infocontainer.svelte-77x27v{position:relative;width:100%;height:85%;overflow:hidden;text-align:center;background-color:#D9D9D9}.entrycontainer.svelte-77x27v{height:53vh;aspect-ratio:2/3;position:relative;margin-left:1vw;margin-right:1vw;margin-bottom:2vh}.fullsize.svelte-77x27v{height:auto;padding:10vh 5vw 10vh 5vw;display:flex;justify-content:center;flex-wrap:wrap}.imgwrapper.svelte-77x27v{display:flex;justify-content:center;overflow:hidden}.bannersize.svelte-77x27v{width:100vw;height:47vh}.bannerimg.svelte-77x27v{display:block;padding:0;margin:0}.banner.svelte-77x27v{display:flex;justify-content:center;align-items:center}.title.svelte-77x27v{position:absolute;top:0;left:0;z-index:20;color:white;font-size:15vh;font-family:"Unica One", cursive;font-weight:400;line-height:100%;letter-spacing:6.65px;word-wrap:break-word;display:flex;justify-content:center;align-items:center;text-align:center;background-color:rgba(0, 0, 0, 0.5)}body{padding:0;margin:0;overscroll-behavior-y:none}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Unica+One&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">  <div class="banner bannersize svelte-77x27v" data-svelte-h="svelte-jetn1j"><div class="imgwrapper bannersize center svelte-77x27v"><img class="bannerimg svelte-77x27v"${add_attribute("src", banner, 0)}> <img class="bannerimg svelte-77x27v"${add_attribute("src", banner, 0)}> <img class="bannerimg svelte-77x27v"${add_attribute("src", banner, 0)}></div> <div class="title bannersize svelte-77x27v">Meet Our Leadership</div></div> <div class="fullsize svelte-77x27v"><div class="entrycontainer svelte-77x27v"><div class="titlecontainer svelte-77x27v" data-svelte-h="svelte-5gemdm">Alan Zhang</div> <div class="infocontainer svelte-77x27v">${validate_component(InfoBox, "InfoBox").$$render(
    $$result,
    {
      src: alanpfp,
      id: "p1",
      transform: true,
      top: 90
    },
    {},
    {
      default: () => {
        return `<div class="textinfo svelte-77x27v" data-svelte-h="svelte-6iampk">Alan, an undergraduate studying MechE and Business,
                    prototyped a multi-rotor aircraft in high school and founded FPV Creator. He has  worked as a drone
                    operator for Oscar-winning short &quot;Simulacra,&quot; and is the first undergraduate involved with the Berkeley
                    Aviation Innovation Research (AIR) Lab.</div>`;
      }
    }
  )}</div></div>  <div class="entrycontainer svelte-77x27v"><div class="titlecontainer svelte-77x27v" data-svelte-h="svelte-1y7pb5r">Alvin Xiao</div> <div class="infocontainer svelte-77x27v">${validate_component(InfoBox, "InfoBox").$$render(
    $$result,
    {
      src: alvinpfp,
      id: "p2",
      transform: true,
      top: 100
    },
    {},
    {
      default: () => {
        return `<div class="textinfo svelte-77x27v" data-svelte-h="svelte-c7zr36">Alvin, an undergraduate
                    studying MSE and Business, boasts extensive venture capital experience.
                    He raised ~$15M for a portfolio company and was selected to help lead
                    his firm’s most recent investment fund of ~$460M. He&#39;s also worked as a PM,
                    helping Tencent CEO, Ma Huateng, confirm game event development and company
                    acquisition details.</div>`;
      }
    }
  )}</div></div>  <div class="entrycontainer svelte-77x27v"><div class="titlecontainer svelte-77x27v" data-svelte-h="svelte-vdp2kq">Hari Parthasarathy</div> <div class="infocontainer svelte-77x27v">${validate_component(InfoBox, "InfoBox").$$render(
    $$result,
    {
      src: haripfp,
      id: "p3",
      transform: true,
      top: 0
    },
    {},
    {
      default: () => {
        return `<div class="textinfo svelte-77x27v" data-svelte-h="svelte-1du266l">Hari is a rising sophomore studying BioE
                    and Business, with an interest for aviation sparked during his NASA internship.
                    He has researched with Rice University and Johns Hopkins and has worked with several
                    startups in technical and business roles. In his free time, he enjoys movies, cooking, poker,
                    and exploring new experiences!</div>`;
      }
    }
  )}</div></div>  <div class="entrycontainer svelte-77x27v"><div class="titlecontainer svelte-77x27v" data-svelte-h="svelte-ticzcr">Shasi Pinninti</div> <div class="infocontainer svelte-77x27v">${validate_component(InfoBox, "InfoBox").$$render($$result, { src: shasipfp, id: "p4", transform: true }, {}, {
    default: () => {
      return `<div class="textinfo svelte-77x27v" data-svelte-h="svelte-1ogjbfb">Shasi is a MechE and Business double major.
                    He has worked with aerospace firms such as NASA and Blue Origin, helping to re-define their strategic
                    roadmaps. He is also well-versed in the field of finance, having been responsible for
                    risk/growth analytics on a ~$1.7B loan portfolio as well as commodities research for the
                    Indian conglomerate, Vedanta Group.</div>`;
    }
  })}</div></div>  <div class="entrycontainer svelte-77x27v"><div class="titlecontainer svelte-77x27v" data-svelte-h="svelte-g5yxjp">Christine Gu</div> <div class="infocontainer svelte-77x27v">${validate_component(InfoBox, "InfoBox").$$render(
    $$result,
    {
      src: christinepfp,
      id: "p5",
      transform: true
    },
    {},
    {
      default: () => {
        return `<div class="textinfo svelte-77x27v" data-svelte-h="svelte-98t2aa">Christine, an undergraduate in Chemical
                    Engineering, has seven years of experience in yearbook production. She was once Editor in Chief,
                    which granted her an extensive repertoire that includes professional photography, sophisticated
                    graphic design, effective team coordination, and astute production leadership.</div>`;
      }
    }
  )}</div></div>  <div class="entrycontainer svelte-77x27v"><div class="titlecontainer svelte-77x27v" data-svelte-h="svelte-k4f32m">Antonia Dauria</div> <div class="infocontainer svelte-77x27v">${validate_component(InfoBox, "InfoBox").$$render(
    $$result,
    {
      src: antoniapfp,
      id: "p6",
      transform: true,
      top: 20
    },
    {},
    {
      default: () => {
        return `<div class="textinfo svelte-77x27v" data-svelte-h="svelte-1wwsdza">Antonia is an undergraduate studying Sociology.
                    She has eight years of leadership experience in collaborative work through management in orchestras
                    and musical ensemble groups. These experiences gave her a strong suite in public speaking,
                    English rhetoric, and improvised management. In her free time, she also practices sewing,
                    makeup artistry, pottery, and baking.</div>`;
      }
    }
  )}</div></div>  <div class="entrycontainer svelte-77x27v"><div class="titlecontainer svelte-77x27v" data-svelte-h="svelte-1jis4uz">Daniel Chen</div> <div class="infocontainer svelte-77x27v">${validate_component(InfoBox, "InfoBox").$$render(
    $$result,
    {
      src: danielpfp,
      id: "p7",
      transform: true
    },
    {},
    {
      default: () => {
        return `<div class="textinfo svelte-77x27v" data-svelte-h="svelte-qh7le1">Daniel is a EECS and Business double major
                    that dabbles in all things programming related from ML models to frontend development. Recently, he
                    has gained in interest in fractional order signal processing, variability quantification through
                    the analysis of long-range dependence in complex timeseries, and algorithmic trading.</div>`;
      }
    }
  )}</div></div>  <div class="entrycontainer svelte-77x27v"><div class="titlecontainer svelte-77x27v" data-svelte-h="svelte-epsuu0">Cindy Huang</div> <div class="infocontainer svelte-77x27v">${validate_component(InfoBox, "InfoBox").$$render($$result, { src: cindypfp, id: "p8", transform: true }, {}, {
    default: () => {
      return `<div class="textinfo svelte-77x27v" data-svelte-h="svelte-gs3foo">Cindy is an undergraduate studying Mech E and
                    business. Her experiences spans across robotics/automation, manufacturing, and aeronautical
                    engineering.</div>`;
    }
  })}</div></div> </div> ${validate_component(Menu, "Menu").$$render($$result, { includeMainLogo: false }, {}, {})}`;
});
export {
  Page as default
};

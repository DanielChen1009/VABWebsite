import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
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
  return `<div role="presentation"><img${add_attribute("id", id, 0)}${add_attribute("src", src, 0)} alt="" style="${"position: absolute; transform: translateX(-50%) ; height: 100%; object-fit: cover; width: 100%; object-position: 50% " + escape(top, true) + "%"}"> ${``} ${`${slots.inert ? slots.inert({}) : ``}`}</div>`;
});
const banner = "/_app/immutable/assets/banner.13fd8471.jpeg";
const alanpfp = "/_app/immutable/assets/alanpfp.3ba1ba2e.jpg";
const antoniapfp = "/_app/immutable/assets/antoniapfp.ccaac7cb.jpg";
const christinepfp = "/_app/immutable/assets/christinepfp.e0245820.jpg";
const cindypfp = "/_app/immutable/assets/cindypfp.380ac39d.jpg";
const danielpfp = "/_app/immutable/assets/danielpfp.e8ed3e4a.jpg";
const haripfp = "/_app/immutable/assets/haripfp.cc1be9e5.jpg";
const shasipfp = "/_app/immutable/assets/shasipfp.679e5606.jpg";
const senguptapfp = "/_app/immutable/assets/senguptapfp.0844fa54.jpg";
const frankpfp = "/_app/immutable/assets/frankpfp.70576b57.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.section-header.svelte-11elkwa{display:flex;width:100%;height:10vw;color:black;text-align:center;align-items:center;justify-content:center;font-size:10vh;font-family:"Open Sans", sans-serif;font-weight:600;padding:5vh 0 5vh 0}.textinfo.svelte-11elkwa{color:black;font-size:1.75vh;font-family:"Open Sans", sans-serif;font-weight:320;line-height:210%;word-wrap:break-word;position:absolute;height:100%;background-color:rgba(255, 255, 255, 0.9);text-align:left;padding:5%}.titlecontainer.svelte-11elkwa{color:white;font-size:90%;font-family:"Open Sans", sans-serif;font-weight:700;line-height:100%;letter-spacing:1.40px;word-wrap:break-word;background-color:rgba(152, 0, 0, 0.80);position:relative;height:15%;width:100%;display:flex;justify-content:center;align-items:center;text-align:center}.infocontainer.svelte-11elkwa{position:relative;width:100%;height:85%;overflow:hidden;text-align:center;background-color:#D9D9D9}.entrycontainer.svelte-11elkwa{height:53vh;aspect-ratio:2/3;position:relative;margin-left:1vw;margin-right:1vw;margin-bottom:2vh}@media only screen and (min-width: 768px){.fullsize.svelte-11elkwa{width:90vw;height:auto;padding:0 5vw 0 5vw;display:flex;justify-content:center;flex-wrap:wrap}.bannersize.svelte-11elkwa{width:100vw;height:47vh}}@media only screen and (max-width: 768px){.fullsize.svelte-11elkwa{width:90vw;height:auto;padding:0 5vw 0 5vw;display:flex;justify-content:center;flex-wrap:wrap}.bannersize.svelte-11elkwa{width:100vw;height:47vh}}.imgwrapper.svelte-11elkwa{display:flex;position:absolute;justify-content:center;overflow:hidden}.bannerimg.svelte-11elkwa{display:block;height:100%}.banner.svelte-11elkwa{display:flex;justify-content:center;align-items:center;overflow:hidden}.title.svelte-11elkwa{position:absolute;top:0;left:0;z-index:20;color:white;font-size:10vw;font-family:"Unica One", cursive;font-weight:400;line-height:100%;letter-spacing:6.65px;word-wrap:break-word;display:flex;justify-content:center;align-items:center;text-align:center;background-color:rgba(0, 0, 0, 0.5)}body{padding:0;margin:0;overscroll-behavior-y:none;overscroll-behavior-x:none}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Unica+One&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1"> <div class="banner bannersize svelte-11elkwa" data-svelte-h="svelte-1mw9muc"><div class="imgwrapper bannersize center svelte-11elkwa"><img class="bannerimg svelte-11elkwa"${add_attribute("src", banner, 0)}> <img class="bannerimg svelte-11elkwa"${add_attribute("src", banner, 0)}> <img class="bannerimg svelte-11elkwa"${add_attribute("src", banner, 0)}></div> <div class="title bannersize svelte-11elkwa">Meet the Team</div></div> <div class="section-header svelte-11elkwa" data-svelte-h="svelte-b54zst">Officers</div> <div class="fullsize svelte-11elkwa"><div class="entrycontainer svelte-11elkwa"><div class="titlecontainer svelte-11elkwa" data-svelte-h="svelte-5gemdm">Alan Zhang</div> <div class="infocontainer svelte-11elkwa">${validate_component(InfoBox, "InfoBox").$$render(
    $$result,
    {
      src: alanpfp,
      id: "p1",
      transform: true,
      top: 90
    },
    {},
    {
      hovered: () => {
        return `<div slot="hovered" class="textinfo svelte-11elkwa" data-svelte-h="svelte-1k5db5q">Alan, an undergraduate studying MechE and Business,
                    prototyped a multi-rotor aircraft in high school and founded FPV Creator. He has  worked as a drone
                    operator for Oscar-winning short &quot;Simulacra,&quot; and is the first undergraduate involved with the Berkeley
                    Aviation Innovation Research (AIR) Lab.</div>`;
      }
    }
  )}</div></div>  <div class="entrycontainer svelte-11elkwa"><div class="titlecontainer svelte-11elkwa" data-svelte-h="svelte-vdp2kq">Hari Parthasarathy</div> <div class="infocontainer svelte-11elkwa">${validate_component(InfoBox, "InfoBox").$$render(
    $$result,
    {
      src: haripfp,
      id: "p3",
      transform: true,
      top: 0
    },
    {},
    {
      hovered: () => {
        return `<div slot="hovered" class="textinfo svelte-11elkwa" data-svelte-h="svelte-1m0gjzt">Hari is a rising sophomore studying BioE
                    and Business, with an interest for aviation sparked during his NASA internship.
                    He has researched with Rice University and Johns Hopkins and has worked with several
                    startups in technical and business roles. In his free time, he enjoys movies, cooking, poker,
                    and exploring new experiences!</div>`;
      }
    }
  )}</div></div>  <div class="entrycontainer svelte-11elkwa"><div class="titlecontainer svelte-11elkwa" data-svelte-h="svelte-ticzcr">Shasi Pinninti</div> <div class="infocontainer svelte-11elkwa">${validate_component(InfoBox, "InfoBox").$$render($$result, { src: shasipfp, id: "p4", transform: true }, {}, {
    hovered: () => {
      return `<div slot="hovered" class="textinfo svelte-11elkwa" data-svelte-h="svelte-18par77">Shasi is a MechE and Business double major.
                    He has worked with aerospace firms such as NASA and Blue Origin, helping to re-define their strategic
                    roadmaps. He is also well-versed in the field of finance, having been responsible for
                    risk/growth analytics on a ~$1.7B loan portfolio as well as commodities research for the
                    Indian conglomerate, Vedanta Group.</div>`;
    }
  })}</div></div>  <div class="entrycontainer svelte-11elkwa"><div class="titlecontainer svelte-11elkwa" data-svelte-h="svelte-g5yxjp">Christine Gu</div> <div class="infocontainer svelte-11elkwa">${validate_component(InfoBox, "InfoBox").$$render(
    $$result,
    {
      src: christinepfp,
      id: "p5",
      transform: true
    },
    {},
    {
      hovered: () => {
        return `<div slot="hovered" class="textinfo svelte-11elkwa" data-svelte-h="svelte-o5yy20">Christine, an undergraduate in Chemical
                    Engineering, has seven years of experience in yearbook production. She was once Editor in Chief,
                    which granted her an extensive repertoire that includes professional photography, sophisticated
                    graphic design, effective team coordination, and astute production leadership.</div>`;
      }
    }
  )}</div></div>  <div class="entrycontainer svelte-11elkwa"><div class="titlecontainer svelte-11elkwa" data-svelte-h="svelte-ywt1kh">Antonia d&#39;Auria</div> <div class="infocontainer svelte-11elkwa">${validate_component(InfoBox, "InfoBox").$$render(
    $$result,
    {
      src: antoniapfp,
      id: "p6",
      transform: true,
      top: 20
    },
    {},
    {
      hovered: () => {
        return `<div slot="hovered" class="textinfo svelte-11elkwa" data-svelte-h="svelte-vqg64c">Antonia is an undergraduate studying Sociology.
                    She has eight years of leadership experience in collaborative work through management in orchestras
                    and musical ensemble groups. These experiences gave her a strong suite in public speaking,
                    English rhetoric, and improvised management. In her free time, she also practices sewing,
                    makeup artistry, pottery, and baking.</div>`;
      }
    }
  )}</div></div>  <div class="entrycontainer svelte-11elkwa"><div class="titlecontainer svelte-11elkwa" data-svelte-h="svelte-1jis4uz">Daniel Chen</div> <div class="infocontainer svelte-11elkwa">${validate_component(InfoBox, "InfoBox").$$render(
    $$result,
    {
      src: danielpfp,
      id: "p7",
      transform: true
    },
    {},
    {
      hovered: () => {
        return `<div slot="hovered" class="textinfo svelte-11elkwa" data-svelte-h="svelte-e6y6ad">Daniel is a EECS and Business double major
                    that dabbles in all things programming related from ML models to frontend development. Recently, he
                    has gained in interest in fractional order signal processing, variability quantification through
                    the analysis of long-range dependence in complex timeseries, and algorithmic trading.</div>`;
      }
    }
  )}</div></div>  <div class="entrycontainer svelte-11elkwa"><div class="titlecontainer svelte-11elkwa" data-svelte-h="svelte-epsuu0">Cindy Huang</div> <div class="infocontainer svelte-11elkwa">${validate_component(InfoBox, "InfoBox").$$render($$result, { src: cindypfp, id: "p8", transform: true }, {}, {
    hovered: () => {
      return `<div slot="hovered" class="textinfo svelte-11elkwa" data-svelte-h="svelte-7ffgz2">Cindy is an undergraduate studying Mech E and
                    business. Her experiences spans across robotics/automation, manufacturing, and aeronautical
                    engineering.</div>`;
    }
  })}</div></div> </div> <div class="section-header svelte-11elkwa" data-svelte-h="svelte-1vzhlr">Advisors</div> <div class="fullsize svelte-11elkwa"><div class="entrycontainer svelte-11elkwa"><div class="titlecontainer svelte-11elkwa" data-svelte-h="svelte-j2cbq7">Raja Sengupta</div> <div class="infocontainer svelte-11elkwa">${validate_component(InfoBox, "InfoBox").$$render(
    $$result,
    {
      src: senguptapfp,
      id: "p1",
      transform: true,
      top: 90
    },
    {},
    {
      hovered: () => {
        return `<div slot="hovered" class="textinfo svelte-11elkwa" style="font-size: 1.25vh;" data-svelte-h="svelte-16wiujy">Raja Sengupta is a Professor of Civil and Environmental Engineering at UC Berkeley.
                    Sengupta’s research focuses on automated cars, drones, connected cars, smartphone apps
                    for economics &amp; transportation, wireless networking, and control theory. He likes to do
                    research on the industry and get it into the marketplace, and he holds car-to-road networking
                    patents with Toyota, a UAV patent with BAE Aerospace, and car-to-car networking contributions
                    standardized by the SAE into J2945. Sengupta has been an advisor to the World Bank, is a recipient
                    of the USDOT’s Connected Vehicle Technology award in 2011, the UC Berkeley Energy and Climate
                    Lectures Innovation award in 2014, and has authored over a hundred papers spanning control theory,
                    networking, drones, and transportation.</div>`;
      }
    }
  )}</div></div>  <div class="entrycontainer svelte-11elkwa"><div class="titlecontainer svelte-11elkwa" data-svelte-h="svelte-510mk3">Frank Ketcham</div> <div class="infocontainer svelte-11elkwa">${validate_component(InfoBox, "InfoBox").$$render(
    $$result,
    {
      src: frankpfp,
      id: "p1",
      transform: true,
      top: 90
    },
    {},
    {
      hovered: () => {
        return `<div slot="hovered" class="textinfo svelte-11elkwa" style="font-size: 1.25vh;" data-svelte-h="svelte-1v8t32j">Frank is a highly experienced aviation professional with over 35 years of experience. He holds
                    several FAA ratings and is certified to fly a multitude of aircraft including the Airbus A320,
                    A330 and A350 and is currently a pilot for a major US Airline. He has over 20,000 hours of both
                    domestic and international flying experience. In 2020 he completed building of a Vans RV-14A
                    experimental aircraft with state of the area avionics. He is experienced in both manned and
                    unmanned systems and holds an FAA Remote Pilot FAR 107 license and has a variety of experience
                    with FAA certification and airworthiness. Additionally, he has  held a staff position as a
                    Commercial Aviation Specialist at UC Berkeley School of Engineering since 2008.</div>`;
      }
    }
  )}</div></div> </div> ${validate_component(Menu, "Menu").$$render($$result, { includeMainLogo: false }, {}, {})}`;
});
export {
  Page as default
};

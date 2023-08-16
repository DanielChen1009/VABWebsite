import { c as create_ssr_component, a as each, e as escape } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.header.svelte-1rgdv7m{padding:1vw;border:#FF4D2D 4px solid;color:black;font-size:1.5vh;font-family:"Open Sans", sans-serif;font-weight:800;line-height:100%;letter-spacing:1px;word-wrap:break-word;margin-bottom:1vh}.center.svelte-1rgdv7m{display:flex;justify-content:center;align-items:center}.fullsize.svelte-1rgdv7m{width:100vw;height:100vh}.table-wrapper.svelte-1rgdv7m{position:relative;border:#FF4D2D 10px solid;border-radius:1vh;;}.table-scroll.svelte-1rgdv7m{height:80vh;width:80vw;overflow:auto}.cell.svelte-1rgdv7m{border:#FF4D2D 2px solid;padding:1vw;color:black;font-size:1.5vh;font-family:"Open Sans", sans-serif;font-weight:600;line-height:100%;letter-spacing:0.25vh;word-wrap:break-word;margin-bottom:1vh}.table.svelte-1rgdv7m{border:#FF4D2D 1px solid;border-collapse:collapse;width:100%}body{padding:0;margin:0;overscroll-behavior-y:none;overscroll-behavior-x:none}',
  map: null
};
function checkPrefContact(entry) {
  if (entry["bothcheck"] || entry["emailcheck"] && entry["textcheck"]) {
    return "Both";
  }
  if (entry["emailcheck"]) {
    return "Email";
  }
  if (entry["textcheck"]) {
    return "Text";
  }
}
function checkTeamInterest(entry) {
  let ret = [];
  if (entry["engin"]) {
    ret.push("Engineering");
  }
  if (entry["business"]) {
    ret.push("Business");
  }
  if (entry["consulting"]) {
    ret.push("Consulting");
  }
  return ret;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data.entries);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="center fullsize svelte-1rgdv7m"><div class="table-wrapper svelte-1rgdv7m"><div class="table-scroll svelte-1rgdv7m"><table class="table svelte-1rgdv7m"><thead data-svelte-h="svelte-7zdds7"><tr><th class="header svelte-1rgdv7m" style="border-left: none">Name</th> <th class="header svelte-1rgdv7m">Major</th> <th class="header svelte-1rgdv7m">Year</th> <th class="header svelte-1rgdv7m">Email</th> <th class="header svelte-1rgdv7m">Phone Number</th> <th class="header svelte-1rgdv7m">Preferred Contact</th> <th class="header svelte-1rgdv7m">Team Interest</th> <th class="header svelte-1rgdv7m" style="border-right: none">Referral</th></tr></thead> <tbody>${each(data.entries, (entry) => {
    return `<tr><td class="cell svelte-1rgdv7m" style="border-left: none">${escape(entry["fname"])} ${escape(entry["lname"])}</td> <td class="cell svelte-1rgdv7m">${escape(entry["major"])}</td> <td class="cell svelte-1rgdv7m">${escape(entry["year"])}</td> <td class="cell svelte-1rgdv7m">${escape(entry["email"])}</td> <td class="cell svelte-1rgdv7m">${escape(entry["pnum"])}</td> <td class="cell svelte-1rgdv7m">${escape(checkPrefContact(entry))}</td> <td class="cell svelte-1rgdv7m">${each(checkTeamInterest(entry), (tint) => {
      return `<div style="margin-bottom: 0.25vh">${escape(tint)}</div>`;
    })}</td> <td class="cell svelte-1rgdv7m" style="border-right: none">${escape(entry["refer"])}</td> </tr>`;
  })}</tbody></table></div></div> </div>`;
});
export {
  Page as default
};

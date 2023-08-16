import { d as db } from "../../../chunks/db.js";
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const goto = /* @__PURE__ */ client_method("goto");
const actions = {
  // create: async ({request}) => {
  //     const formData = await request.formData();
  //     let data = {};
  //     const entryIterator = formData.entries();
  //     let entry = entryIterator.next();
  //     while (!entry.done) {
  //         data[entry.value[0]] = entry.value[1];
  //         console.log(entry);
  //         entry = entryIterator.next();
  //     }
  //     await db.createEntry(data);
  //     return {success: true};
  // }
  create: async ({ request }) => {
    const formData = await request.formData();
    let data = {};
    const entryIterator = formData.entries();
    let entry = entryIterator.next();
    while (!entry.done) {
      data[entry.value[0]] = entry.value[1];
      console.log(entry);
      entry = entryIterator.next();
    }
    try {
      await db.collection("entries").insertOne(data);
    } catch (e) {
      console.log(e);
      goto("/join-us");
    }
  }
};
export {
  actions
};

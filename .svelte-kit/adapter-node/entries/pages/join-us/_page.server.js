import { d as db } from "../../../chunks/db.js";
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
    await db.collection("entries").insertOne(data);
    return { success: true };
  }
};
export {
  actions
};

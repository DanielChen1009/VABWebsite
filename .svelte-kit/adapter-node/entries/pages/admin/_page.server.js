import { d as db } from "../../../chunks/db.js";
async function load() {
  const entryCollection = await db.collection("entries");
  const entries = await entryCollection.find();
  let rets = [];
  for await (const doc of entries) {
    console.log(doc);
    delete doc["_id"];
    rets.push(doc);
  }
  return {
    entries: rets
  };
}
export {
  load
};

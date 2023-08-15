import { e as entryCollection } from "./Firebase.js";
import { query, getDocs, addDoc } from "firebase/firestore";
async function getAllEntries() {
  const q = query(entryCollection);
  const querySnapshot = await getDocs(q);
  const ret = [];
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    ret.push({ id: doc.id, data: doc.data() });
  });
  return ret;
}
async function createEntry(data) {
  await addDoc(entryCollection, data);
}
export {
  createEntry as c,
  getAllEntries as g
};

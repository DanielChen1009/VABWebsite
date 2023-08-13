import { a as auth } from "../../../chunks/Firebase.js";
import { r as redirect } from "../../../chunks/index.js";
import { g as getAllEntries } from "../../../chunks/database.js";
async function load() {
  console.log(auth.currentUser);
  if (!auth.currentUser) {
    throw redirect(307, "/admin/login");
  }
  const entries = await getAllEntries();
  console.log(entries);
  return {
    entries
  };
}
export {
  load
};

import { a as auth } from "../../../../chunks/Firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { r as redirect } from "../../../../chunks/index.js";
async function login(data) {
  try {
    const userData = await signInWithEmailAndPassword(auth, data["email"], data["password"]);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + ": " + errorMessage);
    return false;
  }
  console.log("Signed In");
  return true;
}
const actions = {
  login: async ({ request }) => {
    const formData = await request.formData();
    let data = {};
    const entryIterator = formData.entries();
    let entry = entryIterator.next();
    while (!entry.done) {
      data[entry.value[0]] = entry.value[1];
      entry = entryIterator.next();
    }
    const loggedin = await login(data);
    console.log("loggedIn: " + loggedin);
    if (loggedin) {
      throw redirect(303, "/admin");
    }
  }
};
export {
  actions
};

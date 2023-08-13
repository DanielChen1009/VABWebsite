import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA2_Cx9iNwOGqchAYFJy-Ld0lgQvpxxITA",
  authDomain: "vabdata-7c30d.firebaseapp.com",
  projectId: "vabdata-7c30d",
  storageBucket: "vabdata-7c30d.appspot.com",
  messagingSenderId: "301685515770",
  appId: "1:301685515770:web:10b5dc5c625a93b16bf043",
  measurementId: "G-M367GXKXC7"
};
const app = initializeApp(firebaseConfig);
let db = getFirestore(app);
const auth = getAuth(app);
const entryCollection = collection(db, "entries");
export {
  auth as a,
  entryCollection as e
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, doc, getFirestore } from "Firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2_Cx9iNwOGqchAYFJy-Ld0lgQvpxxITA",
    authDomain: "vabdata-7c30d.firebaseapp.com",
    projectId: "vabdata-7c30d",
    storageBucket: "vabdata-7c30d.appspot.com",
    messagingSenderId: "301685515770",
    appId: "1:301685515770:web:10b5dc5c625a93b16bf043",
    measurementId: "G-M367GXKXC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
let db = getFirestore(app)
export const entryCollection = collection(db, "entries");
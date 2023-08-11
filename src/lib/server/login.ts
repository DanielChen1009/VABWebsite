import { auth } from "../../Firebase";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"

export async function login(data) {
    try {
        const userData = await signInWithEmailAndPassword(auth, data["email"], data["password"])
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + ": " + errorMessage)
        return false;
    }
    console.log("Signed In")
    return true
}
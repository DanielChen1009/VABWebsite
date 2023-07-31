import { addDoc } from "firebase/firestore"
import {entryCollection} from "../../Firebase";


export async function getEntry() {
    return 0;
}

export async function createEntry(data) {
    await addDoc(entryCollection, data)
}

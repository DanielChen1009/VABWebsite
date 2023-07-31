import { addDoc } from "Firebase/firestore"
import {entryCollection} from "../../Firebase";

export async function createEntry(data) {
    await addDoc(entryCollection, data)
}

import { addDoc, query, getDocs} from "firebase/firestore"
import { entryCollection } from "../../Firebase";


export async function getAllEntries() {
    const q = query(entryCollection);
    const querySnapshot = await getDocs(q);
    const ret = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        ret.push({id: doc.id, data: doc.data()})
    });
    return ret;
}

export async function createEntry(data) {
    await addDoc(entryCollection, data)
}

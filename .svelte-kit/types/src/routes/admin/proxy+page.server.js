// @ts-nocheck
import db from "$lib/server/db.ts";
/** */

export async function load() {
    // console.log(auth.currentUser)
    // if (!auth.currentUser) {
    //     throw redirect(307, "/admin/login")
    // }
    const entryCollection = await db.collection('entries');
    const entries = await entryCollection.find();
    let rets = [];
    for await (const doc of entries) {
        console.log(doc);
        delete doc['_id']
        rets.push(doc);
    }
    return {
        entries: rets
    }
}
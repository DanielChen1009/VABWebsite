import db from "$lib/server/db.ts";
import {redirect} from "@sveltejs/kit";
/** @type {import('./$types').PageLoad} */

export async function load({ cookies }) {
    const verified = cookies.get("verified")
    if (!verified) {
        throw redirect(307, "/admin/login")
    }
    const entryCollection = await db.collection('entries');
    const entries = await entryCollection.find();
    let rets = [];
    for await (const doc of entries) {
        delete doc['_id']
        rets.push(doc);
    }
    return {
        entries: rets
    }
}
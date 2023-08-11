import { auth } from "../../Firebase";
import { redirect } from "@sveltejs/kit";
import { getAllEntries} from "$lib/server/database";

/** @type {import('./$types').PageLoad} */

export async function load() {
    console.log(auth.currentUser)
    if (!auth.currentUser) {
        throw redirect(307, "/admin/login")
    }

    const entries = await getAllEntries();
    console.log(entries);
    return {
        entries: entries
    }
}
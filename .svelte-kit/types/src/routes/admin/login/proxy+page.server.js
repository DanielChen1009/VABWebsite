// @ts-nocheck
import db from "$lib/server/db.ts"

import {redirect} from "@sveltejs/kit";
/** */

export const actions = {
    login:/** @param {import('./$types').RequestEvent} event */  async ({cookies, request}) => {
        const formData = await request.formData();
        let data = {};
        const entryIterator = formData.entries();
        let entry = entryIterator.next();
        while (!entry.done) {
            data[entry.value[0]] = entry.value[1];
            entry = entryIterator.next();
        }
        const user = await db.collection("admins").find(data).toArray();
        if (user.length) {
            console.log("loggedIn: " + user)
            cookies.set("verified", 'true', { path: "/" })
            throw redirect(303, '/admin');
        } else {
            console.log("Failed to login")
        }
    }
};

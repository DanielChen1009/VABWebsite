// @ts-nocheck
import {login} from "$lib/server/login.ts";
import {redirect} from "@sveltejs/kit";
/** */

export const actions = {
    login:/** @param {import('./$types').RequestEvent} event */  async ({request}) => {
        const formData = await request.formData();
        let data = {};
        const entryIterator = formData.entries();
        let entry = entryIterator.next();
        while (!entry.done) {
            data[entry.value[0]] = entry.value[1];
            entry = entryIterator.next();
        }
        const loggedin = await login(data);
        console.log("loggedIn: " + loggedin)

        if (loggedin) {
            throw redirect(303, '/admin');
        }
    }
};

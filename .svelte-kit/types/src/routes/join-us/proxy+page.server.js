// @ts-nocheck
import db from "$lib/server/db.ts";
/** */

export const actions = {
    // create: async ({request}) => {
    //     const formData = await request.formData();
    //     let data = {};
    //     const entryIterator = formData.entries();
    //     let entry = entryIterator.next();
    //     while (!entry.done) {
    //         data[entry.value[0]] = entry.value[1];
    //         console.log(entry);
    //         entry = entryIterator.next();
    //     }
    //     await db.createEntry(data);
    //     return {success: true};
    // }

    create:/** @param {import('./$types').RequestEvent} event */  async ({request}) => {
        const formData = await request.formData();
        let data = {};
        const entryIterator = formData.entries();
        let entry = entryIterator.next();
        while (!entry.done) {
            data[entry.value[0]] = entry.value[1];
            console.log(entry);
            entry = entryIterator.next();
        }
        await db.collection('entries').insertOne(data)
        return {success: true}
    }
};

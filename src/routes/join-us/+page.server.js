// import db from "$lib/server/db.ts";
// import {goto} from "$app/navigation";
//
// /** @type {import('./$types').Actions} */
// export const actions = {
//     // create: async ({request}) => {
//     //     const formData = await request.formData();
//     //     let data = {};
//     //     const entryIterator = formData.entries();
//     //     let entry = entryIterator.next();
//     //     while (!entry.done) {
//     //         data[entry.value[0]] = entry.value[1];
//     //         console.log(entry);
//     //         entry = entryIterator.next();
//     //     }
//     //     await db.createEntry(data);
//     //     return {success: true};
//     // }
//
//     create: async ({request}) => {
//         const formData = await request.formData();
//         let data = {};
//         const entryIterator = formData.entries();
//         let entry = entryIterator.next();
//         while (!entry.done) {
//             data[entry.value[0]] = entry.value[1];
//             console.log(entry);
//             entry = entryIterator.next();
//         }
//         try {
//             await db.collection('entries').insertOne(data)
//         } catch (e) {
//             console.log(e);
//             goto("/join-us")
//         }
//     }
// };
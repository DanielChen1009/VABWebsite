// import db from "$lib/server/db.ts"
//
// import {redirect} from "@sveltejs/kit";
// /** @type {import('./$types').Actions} */
//
// export const actions = {
//     login: async ({cookies, request}) => {
//         const formData = await request.formData();
//         let data = {};
//         const entryIterator = formData.entries();
//         let entry = entryIterator.next();
//         while (!entry.done) {
//             data[entry.value[0]] = entry.value[1];
//             entry = entryIterator.next();
//         }
//         const user = await db.collection("admins").find(data).toArray();
//         if (user.length) {
//             console.log("loggedIn: " + user)
//             cookies.set("verified", 'true', { path: "/" })
//             throw redirect(303, '/admin');
//         } else {
//             console.log("Failed to login")
//         }
//     }
// };

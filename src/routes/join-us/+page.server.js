import * as db from "$lib/server/database.js";

export const actions = {
    default: async ({ cookies, request }) => {
        const formData = await request.formData();
        let data = {
            fname: formData.get("fname"),
            lname: formData.get("lname"),
            email: formData.get("email"),
            major: formData.get("major"),
            year: formData.get("year")
        }

    }
};

import { roles } from "../../middleware/auth.js"

export const endpoint = {
    create:[roles.Admin],
    getAlls:[roles.Admin],
    getActive:[roles.User],
    update:[roles.Admin],
    specific:[roles.User,roles.Admin]
}

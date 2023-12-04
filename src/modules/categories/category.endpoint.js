const roles = {
    Admin:'Admin',User:'User'
}

export const endpoint = {
    create:[roles.Admin],
    getAlls:[roles.Admin || roles.User],
    getActive:[roles.User],
    update:[roles.Admin],
    specific:[roles.User,roles.Admin]
}
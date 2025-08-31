// external modules

// internal modules
const Users = require(`../models/Users`);

async function getUsers(req, res, next) {
    try {
        const users = await Users.find();
        // console.log(users);

        res.render(`pages/users.ejs`, { users });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getUsers
};
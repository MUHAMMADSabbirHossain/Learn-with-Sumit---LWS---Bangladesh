const mongoose = require(`mongoose`);

const userSchema = require(`../schemas/Users`);

const Users = mongoose.model(`People`, userSchema);

module.exports = Users;
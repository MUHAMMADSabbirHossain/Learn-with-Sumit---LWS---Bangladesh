function getChats(req, res, next) {
    res.render(`pages/chats.ejs`);
}

module.exports = {
    getChats
};
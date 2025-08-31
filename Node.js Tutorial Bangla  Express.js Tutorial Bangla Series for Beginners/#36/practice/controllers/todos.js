// external modules

// internal modules

function getTodos(req, res, next) {
    res.render(`pages/todos.ejs`);
}

module.exports = {
    getTodos
};
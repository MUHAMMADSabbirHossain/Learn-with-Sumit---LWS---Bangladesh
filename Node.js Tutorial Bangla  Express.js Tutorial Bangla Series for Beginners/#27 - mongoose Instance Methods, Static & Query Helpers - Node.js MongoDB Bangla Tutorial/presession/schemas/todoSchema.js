const mongoose = require(`mongoose`);

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    status: {
        type: String,
        enum: [`active`, `inactive`],
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// instance methods
todoSchema.methods = {
    findActive: function () {
        return mongoose.model("Todo").find({ status: `active` });
    },

    findActiveCallback: function (callback) {
        return mongoose.model(`Todo`).find({ status: `active` }, callback);
    }
};

// static methods
todoSchema.statics = {
    findByJS: function () {
        return this.find({ title: /js/i });
    }
};

// query helpers
todoSchema.query = {
    byLanguage: function (language) {
        return this.find({ title: new RegExp(language, `i`) });
    }
}

module.exports = todoSchema
const express = require(`express`);
const router = express.Router();
const mongoose = require(`mongoose`);
const todoSchema = require(`../schemas/todoSchema`);
const Todo = mongoose.model(`Todo`, todoSchema);
const checkLogin = require(`../middlewares/checkLogin`);
const userSchema = require(`../schemas/userSchema`);
const User = mongoose.model(`User`, userSchema);

router.get(`/`, checkLogin, async function (req, res) {
    try {
        const result = await Todo.find().populate(`user`, `name username -_id`).select({ _id: 0, __v: 0 });

        res.status(200).send({ custom: `All the todos have got successfully.`, result });
    } catch (error) {
        console.log(error);

        res.status(500).send({ custom: `Something went wrong. Please try again.`, error });
    }
});

router.get(`/active`, async function (req, res) {
    try {
        const todo = new Todo();
        const result = await todo.findByActive();

        res.status(200).send({ custom: `All the active todos have got successfully.`, result });
    } catch (error) {
        console.log(error);

        res.status(500).send({ custom: `Something went wrong. Please try again.`, error });
    }
});

router.get(`/js`, async function (req, res) {
    try {
        const result = await Todo.findByJs();

        res.status(200).send({ custom: `All js title have got successfully.`, result });
    } catch (error) {
        console.log(error);

        res.status(500).send({ custom: `Something went wrong. Please try again.`, error });
    }
});

router.get(`/language`, async function (req, res) {
    try {
        const result = await Todo.find().byLanguage();

        res.status(200).send({ custom: `All language related todos title have got successfully.`, result });
    } catch (error) {
        console.log(error);

        res.status(500).send({ custom: `Something went wrong. Please try again.`, error });
    }
});

router.get(`/:id`, async function (req, res) {
    try {
        const result = await Todo.find({ _id: req.params.id });

        res.status(200).send({ custom: `Todo id has got successfully.`, result });
    } catch (error) {
        console.log(error);

        res.send(500).send({ custom: `Something went wrong. Please try again.`, error });
    }
});

router.post(`/`, checkLogin, async function (req, res) {
    try {
        // const newTodo = new Todo(req.body);
        // const result = await newTodo.save();

        const result = await new Todo({
            ...req.body,
            user: req.userId
        }).save();

        await User.updateOne({ _id: req.userId }, { $push: { todos: result._id } });

        res.status(200).send({ custom: `Todo has posted successfully.`, result });
    } catch (error) {
        console.log(error);

        res.send(500).send({ custom: `Something went wrong. Please try again.`, error });
    }
});

router.post(`/all`, async function (req, res) {
    try {
        const result = await Todo.insertMany(req.body);

        res.status(200).send({ custom: `Todos have posted successfully`, result });
    } catch (error) {
        console.log(error);

        res.send(500).send({ custom: `Something went wrong. Please try again.`, error });
    }
});

router.put(`/:id`, async function (req, res) {
    try {
        const id = req.params.id;
        const body = req.body;
        const result = await Todo.findByIdAndUpdate({ _id: id }, {
            $set: { status: body.status }
        }, { new: true, useFindAndModify: false });

        res.status(200).send({ custom: `Todo has updated successfully.`, result });
    } catch (error) {
        console.log(error);

        res.send(500).send({ custom: `Something went wrong. Please try again.`, error });
    }
});

router.delete(`/:id`, async function (req, res) {
    try {
        const id = req.params.id;
        const result = await Todo.findByIdAndDelete(id);

        res.status(200).send({ custom: `Todo has deleted successfully`, result });
    } catch (error) {
        console.log(error);

        res.send(500).send({ custom: `Something went wrong. Please try again.`, error });
    }
});

router.delete(`/all`, async function (req, res) {
    try {
        const result = await Todo.deleteMany();

        res.status(200).send({ custom: `Todos have deleted successfully`, result });
    } catch (error) {
        console.log(error);

        res.send(500).send({ custom: `Something went wrong. Please try again.`, error });
    }
});

module.exports = router;
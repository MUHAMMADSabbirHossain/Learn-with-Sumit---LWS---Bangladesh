const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const todoSchema = require('../schemas/todoSchema');
const Todo = mongoose.model('Todo', todoSchema);
const checkLogin = require('../middlewares/checkLogin');

router.get('/', checkLogin, async function (req, res) {
    try {
        const result = await Todo.find().select({ _id: 0, __v: 0 });

        res.status(200).send({ custom: 'todos fetched successfully', result });
    } catch (error) {
        console.log(error);

        res.status(500).send({ custom: 'something went wrong', error });
    }
});


router.get(`/active`, async function (req, res) {
    try {
        const result = await Todo.find({ status: 'active' }).select({ __v: 0 });

        res.status(200).send({ custom: 'todos fetched successfully', result });
    } catch (error) {
        console.log(error);

        res.status(500).send({ custom: 'something went wrong', error });
    }
});

router.get(`/active-callback`, function (req, res) {
    const todo = new Todo();
    todo.findActiveCallback(function (error, data) {
        res.status(200).json({ data });
    });
});

router.get(`/js`, async function (req, res) {
    try {
        const result = await Todo.findByJS();

        res.status(200).send({ custom: 'todos fetched successfully', result });
    } catch (error) {
        console.log(error);

        res.status(500).send({ custom: 'something went wrong', error });
    }
});

router.get(`/language`, async function (req, res) {
    try {
        const result = await Todo.find().byLanguage('react');

        res.status(200).send({ custom: 'todos fetched successfully', result });
    } catch (error) {
        console.log(error);

        res.status(500).send({ custom: 'something went wrong', error });
    }
});

router.get(`/:id`, async function (req, res) {
    try {
        const result = await Todo.findById(req.params.id).select({ __v: 0 });

        res.status(200).send({ custom: 'todo fetched successfully', result });
    } catch (error) {
        console.log(error);

        res.status(500).send({ custom: 'something went wrong', error });
    }
});

router.post(`/`, async function (req, res) {
    const newTodo = new Todo(req.body);

    try {
        const result = await newTodo.save();
        res.status(200).send({ custom: `todo added successfully`, ...result });
    } catch (error) {
        console.log(error);

        res.status(500).send({ custom: `something went wrong while posting todo`, ...error });
    }
});

router.post(`/all`, async function (req, res) {
    try {
        const result = await Todo.insertMany(req.body);

        res.status(200).send({ custom: `todos added successfully`, ...result });
    } catch (error) {
        console.log(error);

        res.status(500).send({ custom: `something went wrong while posting todos`, ...error });

    }
});

router.put(`/:id`, async function (req, res) {
    const id = req.params.id;
    const body = req.body;

    try {
        const result = await Todo.findByIdAndUpdate({ _id: id }, {
            $set: { status: body.status }
        }, { new: true, useFindAndModify: false });

        res.status(200).send({ custom: `todo updated successfully`, ...result });
    } catch (error) {
        console.log(error);

        res.status(500).send({ custom: `something went wrong while updating todo`, ...error });
    }
});

router.delete(`/:id`, async function (req, res) {
    const id = req.params.id;

    try {
        const result = await Todo.findByIdAndDelete(id);

        res.status(200).send({ custom: `todo deleted successfully`, ...result });
    } catch (error) {
        console.log(error);

        res.status(500).send({ custom: `something went wrong while deleting todo`, ...error });
    }
});

router.delete(`/all`, async function (req, res) {
    try {
        const result = await Todo.deleteMany();

        res.status(200).send({ custom: `todos deleted successfully`, ...result });
    } catch (error) {
        console.log(error);

        res.status(500).send({ custom: `something went wrong while deleting todos`, ...error });
    }
});
module.exports = router;
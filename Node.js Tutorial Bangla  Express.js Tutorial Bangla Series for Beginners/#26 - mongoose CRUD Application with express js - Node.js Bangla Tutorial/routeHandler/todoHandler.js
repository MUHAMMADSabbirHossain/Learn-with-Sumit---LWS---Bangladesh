const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const todoSchema = require('../schemas/todoSchema');
const Todo = new mongoose.model(`Todo`, todoSchema);

// get all the todos
router.get(`/`, async function (req, res) {
    try {
        const result = await Todo.find({ status: `active` }).select({ _id: 0, __v: 0, date: 0 }).limit(2);

        res.status(200).json({
            message: `Todos fetched successfully`,
            todos: result
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: error.message,
            customMsg: `There was a problem in server side to fetch todos!`
        });
    }
});

// get single todo
router.get(`/:id`, async function (req, res) {
    try {
        const result = await Todo.find({ _id: req.params.id }).select({ _id: 0, __v: 0, date: 0 });

        res.status(200).json({
            message: `Todo fetched successfully`,
            todo: result
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: error.message,
            customMsg: `There was a problem in server side to fetch todo!`
        });
    }
});

// post single todo
router.post(`/`, async function (req, res) {
    const newTodo = new Todo(req.body);
    // console.log(newTodo);

    try {
        const result = await newTodo.save();

        res.status(201).json({
            message: `Todo created successfully`,
            todo: result
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: error.message,
            customMsg: `There was a problem in server side to create todo!`
        });
    };
});

// post Multiple todo
router.post(`/all`, async function (req, res) {
    try {
        const result = await Todo.insertMany(req.body);

        res.status(201).json({
            message: `Todos inserted successfully`,
            todos: result
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: error.message,
            customMsg: `There was a problem in server side to create todo!`
        });
    };
});

// put single todo
router.put(`/:id`, async function (req, res) {
    // try {
    //     const result = await Todo.updateOne({ _id: req.params.id }, {
    //         $set: { status: `active` }
    //     });

    //     res.status(201).json({
    //         message: `Todo updated successfully`,
    //         todo: result
    //     });
    // } catch (error) {
    //     console.log(error);

    //     res.status(500).json({
    //         message: error.message,
    //         customMsg: `There was a problem in server side to create todo!`
    //     });
    // }

    try {
        const result = await Todo.findByIdAndUpdate({ _id: req.params.id }, {
            $set: { status: `active` }
        }, { new: true, useFindAndModify: false });

        res.status(201).json({
            message: `Todo updated successfully`,
            todo: result
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: error.message,
            customMsg: `There was a problem in server side to create todo!`
        });
    }
});

// delete single todo
router.delete(`/:id`, async function (req, res) {
    try {
        const result = await Todo.deleteOne({ _id: req.params.id });

        res.status(201).json({
            message: `Todo deleted successfully`,
            todo: result
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: error.message,
            customMsg: `There was a problem in server side to create todo!`
        });
    }
});

module.exports = router;
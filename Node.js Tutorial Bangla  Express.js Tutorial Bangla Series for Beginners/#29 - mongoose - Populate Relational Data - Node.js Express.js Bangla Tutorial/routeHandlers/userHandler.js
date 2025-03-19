const express = require(`express`);
const router = express.Router();
const mongoose = require(`mongoose`);
const userSchema = require(`../schemas/userSchema`);
const User = new mongoose.model(`User`, userSchema);
const bcrypt = require(`bcrypt`);
const jwt = require(`jsonwebtoken`);

router.post(`/singup`, async function (req, res) {
    try {
        const newUser = new User({
            name: req.body.name,
            username: req.body.username,
            password: await bcrypt.hash(req.body.password, 10)
        });

        const result = await newUser.save();

        res.status(200).send({ custom: 'User has posted successfully', result });
    } catch (error) {
        console.log(error);

        res.status(500).send({ custom: 'Something went wrong. Signup failed', error });
    }
});

router.post(`/login`, async function (req, res) {
    // console.log(req.body);

    try {
        const user = await User.find({ username: req.body.username });

        if (user && user.length > 0) {
            const inValidPassword = await bcrypt.compare(req.body.password, user[0].password); // true or false

            if (inValidPassword) {
                // generate token
                const token = jwt.sign({
                    username: user[0].username,
                    userId: user[0]._id
                }, process.env.JWT_SECRET, {
                    expiresIn: '1h'
                });

                res.status(200).json({ custom: 'Authentication successful!', access_token: token, user });
            } else {
                res.status(401).send({ custom: 'Authentication failed!' });
            }
        } else {
            res.status(401).send({ custom: 'Authentication failed!' });
        }
    } catch (error) {
        console.log(error);

        res.status(500).send({ custom: 'Something went wrong. Login failed', error });
    }
});

// get all users
router.get(`/all`, async function (req, res) {
    try {
        const result = await User.find().populate(`todos`).select({ __v: 0 });

        res.status(200).send({ custom: `All users have got successfully`, result });
    } catch (error) {
        console.log(error);

        res.status(500).send({ custom: `Something went wrong. Please try again`, error });
    }
});

module.exports = router
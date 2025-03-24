// extarnal modules
const express = require('express');
const router = express.Router();

// internal modules
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
const { getUsers, addUser, removeUser } = require('../controller/usersController');
const avatarUpload = require('../middlewares/users/avatarUpload');
const { addUserValidators, addUserValidationHandler } = require('../middlewares/users/userValidator');

// users page
router.get('/', decorateHtmlResponse('users'), getUsers);

// add user
router.post(
    '/',
    avatarUpload,
    addUserValidators,
    addUserValidationHandler,
    addUser);

// remove user
router.delete('/:id', removeUser);

module.exports = router;
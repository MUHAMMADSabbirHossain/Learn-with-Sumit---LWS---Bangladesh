// extarnal modules
const express = require('express');
const router = express.Router();

// internal modules
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
const { getUsers, addUser, removeUser } = require('../controller/usersController');
const avatarUpload = require('../middlewares/users/avatarUpload');
const { addUserValidators, addUserValidationHandler } = require('../middlewares/users/userValidator');
const { checkLogin } = require('../middlewares/common/checkLogin');

// users page
router.get('/', decorateHtmlResponse('users'), checkLogin, getUsers);

// add user
router.post(
    '/',
    checkLogin,
    avatarUpload,
    addUserValidators,
    addUserValidationHandler,
    addUser);

// remove user
router.delete('/:id', removeUser);

module.exports = router;
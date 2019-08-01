const express = require('express');
const { createUser, signinUser } = require('../controllers/usersController');
const { validateLogin } = require('../helpers/validation');

const router = express.Router();

router.post('/signup', createUser);

module.exports = router;

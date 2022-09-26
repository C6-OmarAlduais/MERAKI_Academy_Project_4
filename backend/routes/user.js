const express = require('express');
const {register} = require ('../controllers/register');
const {login} = require ('../controllers/login');
const {authentication} = require('../middleware/authentication')
const usersRouter = express.Router()
// --------------------------------------
usersRouter.post('/users', register)
usersRouter.post('/login', authentication, login)
// --------------------------------------
module.exports = usersRouter

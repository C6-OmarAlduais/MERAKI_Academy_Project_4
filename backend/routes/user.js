const express = require('express');
const {register} = require ('../controllers/register');
const usersRouter = express.Router()
// --------------------------------------
usersRouter.post('/users', register)
// --------------------------------------
module.exports = usersRouter

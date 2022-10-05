const express = require('express')
const {addCart, getAllCartItems, deleteItemFromCart} = require('../controllers/cart')
const {authentication} = require('../middleware/authentication')

const cartRouter = express.Router()


cartRouter.post('/',authentication, addCart)
cartRouter.get('/' , authentication, getAllCartItems)
cartRouter.delete('/:id', /* authentication */ deleteItemFromCart)


module.exports = cartRouter
const express = require('express')
const {addNewProduct} = require('../controllers/product')
const productsRouter = express.Router()
//-------------------------------------

productsRouter.post('/', addNewProduct)

//-------------------------------------
module.exports = productsRouter
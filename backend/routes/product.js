const express = require('express')
const {addNewProduct, getAllProducts} = require('../controllers/product')
const {authentication} = require('../middleware/authentication')
const {authorization} = require('../middleware/authorization')
const productsRouter = express.Router()
//-------------------------------------

productsRouter.post('/', authentication, authorization("CREATE_PRODUCT"), addNewProduct)
productsRouter.get('/', authentication, getAllProducts)

//-------------------------------------
module.exports = productsRouter
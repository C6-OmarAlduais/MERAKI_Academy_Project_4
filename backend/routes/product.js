const express = require('express')
const {addNewProduct, getAllProducts, getProductById, updateProductById, deleteProductById} = require('../controllers/product')
const {authentication} = require('../middleware/authentication')
const {authorization} = require('../middleware/authorization')
const productsRouter = express.Router()
//-------------------------------------

productsRouter.post('/', authentication, authorization("CREATE_PRODUCT"), addNewProduct)
productsRouter.get('/', authentication, getAllProducts)
productsRouter.get('/search_1', getProductById)
productsRouter.put('/:id', updateProductById)
productsRouter.delete('/:id', deleteProductById)

//-------------------------------------
module.exports = productsRouter
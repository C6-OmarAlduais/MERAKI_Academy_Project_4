const productModel = require("../models/productSchema");

const addNewProduct = (req, res) => {
  const { productName, description, price, comments, category } = req.body;
  const userId = req.token.userId

  
  const productInstance = new productModel({
    productName,
    description,
    price,
    comments,
    category,
    userId,
  });
  productInstance
    .save()
    .then((product) => {
      res.status(201).json({
        success: true,
        message: `Product edited`,
        product,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
//---------------------------------
const getAllProducts = (req, res) => {
const userId = req.token.userId;
console.log('.......................', userId);
    productModel
    .find({})
    .then((products)=>{
        console.log(products);
        res.status(200).json({
            success:true,
            message: 'All the products',
            products
        })
    })
    .catch((err)=>{
        res.status(500).json({
            success: false,
            message: `Server Error`,
            err: err.message,
          });
    })
    
}



module.exports = {addNewProduct, getAllProducts}
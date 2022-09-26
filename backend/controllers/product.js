const productModel = require("../models/productSchema");

const addNewProduct = (req, res) => {
  const { productName, description, price, comments, category } = req.body;
  const productInstance = new productModel({
    productName,
    description,
    price,
    comments,
    category,
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



module.exports = {addNewProduct,}
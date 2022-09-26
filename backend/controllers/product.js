const productModel = require("../models/productSchema");
//----------------------------------- add new product
const addNewProduct = (req, res) => {
  const { productName, description, price, comments, category } = req.body;
  const userId = req.token.userId;

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
//--------------------------------- get all products
const getAllProducts = (req, res) => {
  const userId = req.token.userId;

  productModel
    .find({})
    .then((products) => {
      console.log(products);
      res.status(200).json({
        success: true,
        message: "All the products",
        userId: userId,
        products,
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
//---------------------------------- get product by Id
const getProductById = (req, res) => {
  let _id = req.query.id;
  productModel
    .find({ _id })
    .then((product) => {
      if (!product) {
        res.status(404).json({
          success: false,
          message: `The product isn't found`,
        });
      }
      res.status(200).json({
        success: true,
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
//------------------------------------------udpate product by id
const updateProductById = (req, res) => {
  const _id = req.params._id;
  productModel
    .findOneAndUpdate(_id, req.body, { new: true })
    .then((product) => {
      res.status(201).json({
        success: true,
        message: `Product updated`,
        product,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server error`,
        err: err.message,
      });
    });
};

//--------------------------------------- delete product by id

const deleteProductById = (req, res) => {
  const _id = req.params.id;
  productModel
    .findByIdAndDelete(_id)
    .then((product) => {
      if (!product) {
        res.status(404).json({
          success: false,
          message: `The product isn't found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `Product deleted`,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server error`,
        err: err.message,
      });
    });
};

module.exports = {
  addNewProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};

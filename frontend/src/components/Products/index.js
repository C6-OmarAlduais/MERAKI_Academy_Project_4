import React from "react";
import { useState, useContext, useEffect } from "react";
import { appContext } from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//---------------------------


//---------------------------

const Products = () => {
  const [img, setImg] = useState("");
  const [newProductName, setNewProductName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [ItemsCounter, setItemsCounter] = useState(0);
  const [allProducts, setAllProducts] = useState([]);
  const [productById, setProductById] = useState({});

  //-----------------------------

  const { token } = useContext(appContext);

  /*const createNewProduct = () => {
    axios.post('http://localhost:5000/products/', {img, productName, description, price, ItemsCounter})
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
}*/

  //------------------------------------ get all products

  const getAllProducts = () => {
    axios
      .get("http://localhost:5000/products/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
       // console.log(res);
        setAllProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigate = useNavigate()
  //--------------------------------------- get product by id
//   const getProductById = (_id) => {
//     axios.get(`http://localhost:5000/products/search_1?id=${_id}`)
//     .then((res)=>{
//         console.log(res.data.product[0]);
// setProductById(res.data.product[0])
//         navigate('/product')

//     })
//     .catch((err)=>{
//         console.log(err);

//     })
//   }

  //---------------------------------------update product by id
  /*
  const updateProductById = () => {
    axios
      .put(`http://localhost:5000/products/${id}`, {
        productName: newProductName,
        description: newDescription,
        price: newPrice,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  */
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    
    <div>
      {allProducts.map((product, i) => {
        return (
          <div onClick={()=>navigate(`/product/${product._id}`)} key={i}>
            {}
            <h3>{product.productName}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <>{productById.productName}</>
          </div>
        );
      })}
      {/* <button onClick={()=>updateProductById(products.id)}>Update</button> */}
    </div>
  
  );
};

export default Products;

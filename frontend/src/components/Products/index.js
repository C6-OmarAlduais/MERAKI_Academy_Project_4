import React from "react";
import { useState, useContext, useEffect } from "react";
import { appContext } from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//---------------------------


//---------------------------

const Products = () => {
  
  const [allProducts, setAllProducts] = useState([]);

  //-----------------------------

  const { token } = useContext(appContext);

  
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
          </div>
        );
      })}
      {/* <button onClick={()=>updateProductById(products.id)}>Update</button> */}
    </div>
  
  );
};

export default Products;

import React from "react";
import { useState, useContext, useEffect } from "react";
import { appContext } from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";

//---------------------------

//---------------------------

const Products = () => {
    const [search, setSearch] = useState('');

  //-----------------------------

  const { token, setAllProducts, allProducts } = useContext(appContext);

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

  const navigate = useNavigate();

//   const search1 = () => {
//     axios.get(`http://localhost:5000/products/search_2?name=${productName}`)
// .then((res)=>{
// setSearch(res.data.productName)
// })
// .catch((err)=>{

// })
//   }

  useEffect(() => {
    if (!allProducts.length) getAllProducts();
  }, []);
  return (
    <div>
      <div>
        <div className="search">
        <input className="search-input"  onChange={(e)=>{setSearch(e.target.value)}} type={'text'} placeholder={'Search...'}></input>
        </div>
        {allProducts.filter((val)=>{
            if(search===''){
                return val
            } else if (val.productName.toLowerCase().includes(search.toLowerCase())){
                return val
            }
        }).map((product, i) => {
          return (
            <div onClick={() => navigate(`/product/${product._id}`)} key={i}>
              {}
              <h3>{product.productName}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          );
        })}
        {/* <button onClick={()=>updateProductById(products.id)}>Update</button> */}
      </div>
    </div>
  );
};

export default Products;

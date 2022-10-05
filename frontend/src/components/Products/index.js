import React from "react";
import { useState, useContext, useEffect } from "react";
import { appContext } from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";
// import Pagination from "../Pagination";

//---------------------------

//---------------------------

const Products = () => {

  const [loading, setLoading] = useState(false);


  //-----------------------------

  const { token, setAllProducts, allProducts, cartProducts } =
    useContext(appContext);

  //--------------------------- get all products

  const getcurrentQty = () => {
    console.log("------", cartProducts);
    const currentQty = cartProducts.reduce((acc, item) => {
      acc[item.productId._id] = item.qnt;
      return acc;
    }, {});
    console.log("currentQty", currentQty);
    return currentQty;
  };
  
//   console.log(' allProducts.length:',  allProducts.length)

  let page = 0 
  const nextPage = () => {
    if(page > allProducts.length){
        page = 0
        getAllProducts()
        return page
        
    } else{
        page = page + 1 
        console.log(page);
        getAllProducts()
        return page
    }
    
    
  }
  const prePage = () => {
    if(page <= 0){
        page = 0
        console.log(page);
        getAllProducts()
        return page
    } else{
    page = page - 1
    console.log(page);
    getAllProducts()
    return page
    }
  }
  console.log(page);

  const getAllProducts = async () => {
    setLoading(true);
    const res = await axios.get(`http://localhost:5000/products/?p=${page}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setAllProducts(res.data.products);
    setLoading(false);
  };

  const navigate = useNavigate();

  const role = localStorage.getItem("role");
  const handleClick = (productId) => {
    if (role === "admin") {
      navigate(`/product/${productId}`);
    }
  };

  useEffect(() => {
    if (!allProducts.length) getAllProducts();
  }, []);
  const [products, setProducts] = useState(0);

  const addToCart = (id) => {
    console.log(products[id]);
    axios
      .post(
        "http://localhost:5000/cart/",
        { productId: id, qnt: products },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div>
        <div className="content">
          {loading ? (
            <div>loading...</div>
          ) : (
            allProducts.map((product, i) => {
              return (
                <div
                  className="item"
                  onClick={() => handleClick(product._id)}
                  key={i}
                >
                  <h2>{product.brand}</h2>
                  <h3>{product.productName}</h3>
                  <img
                    className="product-img"
                    src={product.image}
                    alt={product.productName}
                  ></img>
                  <div className="price-desc">
                    <p>{product.description}</p>
                    <p>{product.price}$</p>
                  </div>
                  <div className="to_cart">
                  <input
                    className="count"
                    type="number"
                    min="0"
                    // value={0}
                    onChange={(e) => setProducts(e.target.value)}
                  ></input>
                  <button
                    className="button-cart"
                    onClick={() => addToCart(product._id)}
                  >
                    Add to Cart
                  </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="next-back">
      <h4 onClick={prePage} className="back"> {`<<`}  Pre ----- </h4>
<h4 onClick={nextPage} className="back"> ----- Next {`>>`} </h4>
</div>
      </div>
    </div>
  );
};

export default Products;

import React from "react";
import { useState, useContext, useEffect } from "react";
import { appContext } from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Pagination from "../Pagination";

//---------------------------

//---------------------------

const Products = () => {
  const [search, setSearch] = useState("");
  //   const [myProducts, setMyProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(3);

  //-----------------------------

  const { token, setAllProducts, allProducts } = useContext(appContext);

  //------------------------------------ get all products

  const getAllProducts = async () => {
    setLoading(true);
    const res = await axios.get("http://localhost:5000/products/", {
      headers: { Authorization: `Bearer ${token}` },
    });

    setAllProducts(res.data.products);
    setLoading(false);
  };

  const navigate = useNavigate();

  //console.log(allProducts);
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const role = localStorage.getItem("role");
  const handleClick = (productId) => {
    if (role === "admin") {
      navigate(`/product/${productId}`);
    }
  };

  const paginate = (pageNums) => {
    console.log(currentProducts);
    setCurrentPage(pageNums);
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
            currentProducts.map((product, i) => {
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
                  <input
                    className="count"
                    type="number"
                    min="0"
                    onChange={(e) => setProducts(e.target.value)}
                  ></input>
                  <button
                    className="button-cart"
                    onClick={() => addToCart(product._id)}
                  >
                    Add to Cart
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
      <Pagination
        productsPerPage={productPerPage}
        totalProducts={allProducts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Products;

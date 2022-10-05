import axios from "axios";
import { React, useState, useContext, useEffect } from "react";
import { appContext } from "../../App";
import "./style.css";

//--------------------------

const Cart = () => {
  const { token, setCartProducts, cartProducts } = useContext(appContext);

  //--------------------------

  //--------------------------
  const getAllItems = () => {
    console.log(token);
    axios
      .get("http://localhost:5000/cart/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data.products);
        setCartProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllItems();
  }, []);

  const deleteCart = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cart/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const nonDeletedCart = cartProducts.filter((item) => {
        return item._id !== id;
      });
      setCartProducts(nonDeletedCart);
    } catch (error) {
      console.log(error);
    }
  };
  const totalPrice = () => {
    const total = cartProducts.reduce((acc, item) => {
      acc += item.qnt * item.productId.price;
      return acc;
    }, 0);
    return total;
  };

  return (
    <div className="main">
      {cartProducts?.map((item, i) => {
        console.log(item);
        return (
          <div key={i} className="items">
            <h2>{item.productId.brand}</h2>
            <h3>{item.productId.productName}</h3>
            <img
              className="product-img"
              src={item.productId.image}
              alt={item.productId.productName}
            ></img>
            <div>
              <p>{item.productId.description}</p>
              <p>Qty:{item.qnt}</p>
              <p>{item.productId.price}$</p>
              <button
                className="button-delete1"
                onClick={() => deleteCart(item._id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}

      <div>
        <h3 className="total">total {totalPrice()}$</h3>
      </div>
    </div>
  );
};

export default Cart;

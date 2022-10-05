import axios from "axios";
import { React, useState, useContext, useEffect } from "react";
import { appContext } from "../../App";
import "./style.css";

//--------------------------

const Cart = () => {
  const { token } = useContext(appContext);

  //--------------------------

  const [allItems, setAllItems] = useState([]);
  //--------------------------
  const getAllItems = () => {
    console.log(token);
    axios
      .get("http://localhost:5000/cart/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data.products);
        setAllItems(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllItems()
  }, []);

  const deleteCart = async (id) => {
    console.log(id);
    try {
        
        await axios.delete(`http://localhost:5000/cart/${id}`, {headers:{Authorization:`Bearer ${token}`}})
        const nonDeletedCart = allItems.filter((item)=>{
            return item._id !== id
        })
        setAllItems(nonDeletedCart)

    } catch (error) {
        console.log(error);
    }
  }
const totalPrice = () => {
    const total = allItems.reduce((acc, item)=>{
    acc += item.qnt * item.productId.price
        return acc
      },0)
      console.log('........................' ,total);
      return total
}

  return (
    <div className="main">
      {allItems?.map((item, i) => {
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
              <button className="button-delete1" onClick={()=>deleteCart(item._id)}>Delete</button>
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

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
    const res = await axios.delete(`http://localhost:5000/cart/${id}`/* , {headers:{Authorization:`Bearer ${token}`}} */)
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
              <button onClick={()=>deleteCart(item.productId._id)}>Delete</button>
            </div>
          </div>
        );
      })}
      {allItems?.reduce((total,item)=>{
total = item.qnt*item.productId.price
return(
    <div>
        <h3 className="total">total {total}$</h3>
    </div>
)
      },0)}
    </div>
  );
};

export default Cart;

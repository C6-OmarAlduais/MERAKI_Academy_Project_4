import axios from "axios";
import { React, useState, useContext } from "react";
import { appContext } from "../../App";


//--------------------------

const Cart = () => {

const {token} = useContext (appContext);

    //--------------------------
    
    const [allItems, setAllItems] = useState([]);
    //--------------------------
 const getAllItems = () => {
    console.log(token);
    axios.get('http://localhost:5000/cart/', {
        headers: { Authorization: `Bearer ${token}` },})
    .then((res)=>{
        console.log(res);
        setAllItems(res.data.products)
    })
    .catch((err)=>{
        console.log(err);
    })
 }
  return (
    <div>

        {allItems?.map((item, i)=>{
            console.log(item);
            return(
                <div key={i}>
                <p>{item.qnt}</p>
                <p>{item.productId.brand}</p>
                <p>{item.productId.image}</p>
                <p>{item.productId.price}</p>
                <img src={item.productId.image}></img>
                </div>

            )
        })}
    <button onClick={getAllItems} >Click</button>
    </div>
  );
};

export default Cart;

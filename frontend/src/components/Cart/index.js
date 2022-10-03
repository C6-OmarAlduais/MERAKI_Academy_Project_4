import { React, useContext } from "react";
import { appContext } from "../../App";

//--------------------------

const Cart = () => {
  //------------------------------ get id and qnt form the local sorage
  const idAndValue = localStorage.getItem("idAndValue");
  const id_value = JSON.parse(idAndValue);
  //----------------------------------
  const { allProducts } = useContext(appContext);

  //---------------------------------
  const addToCart = () => {
    console.log(id_value);
  };
  return (
    <div>
      {allProducts.filter((product, i) => {
        console.log(product);
        if (product._id !== id_value.id) {
          return <p>No Items added to Cart</p>;
        } else {
          return (
            <div>
              <h2>{product._id}</h2>
            </div>
          );
        }
      })}
      <button onClick={addToCart}>Cart</button>
    </div>
  );
};

export default Cart;

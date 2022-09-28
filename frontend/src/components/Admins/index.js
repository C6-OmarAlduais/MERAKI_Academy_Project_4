import { React, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { appContext } from "../../App";
//-------------------------------

const Admin = () => {
  //-------------------------------
  const { id } = useParams();
  const {token} = useContext(appContext)
  //-------------------------------

  const [img, setImg] = useState("");
  const [newProductName, setNewProductName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [ItemsCounter, setItemsCounter] = useState(0);
  const [message, setMessage] = useState("");


  //-------------------------------- create new Product
  /*const createNewProduct = () => {
    axios.post('http://localhost:5000/products/', {productName, description, price}, {headers:{Authorization:`Bearer ${token}`}})
    .then((res)=>{
        //console.log(res);
    })
    .catch((err)=>{
       setMessage(err.response.data.message)
    })
}*/

  //---------------------------------------update product by id

  const updateProductById = () => {
    axios
      .put(`http://localhost:5000/products/${id}`, {
        productName: newProductName,
        description: newDescription,
        price: newPrice,
      }, {headers:{Authorization: `Bearer ${token}`}})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input
        onChange={(e) => {
          setNewProductName(e.target.value);
        }}
        type={"text"}
        placeholder={"Update the product name"}
      ></input>

      <textarea
        onChange={(e) => {
          setNewDescription(e.target.value);
        }}
        type={"text"}
        placeholder={"Update the product description"}
      ></textarea>

      <input
        onChange={(e) => {
          setNewPrice(e.target.value);
        }}
        type={"text"}
        placeholder={"Update the product price"}
      ></input>
      <button onClick={updateProductById}>Update</button>
    </div>
  );
};

export default Admin;

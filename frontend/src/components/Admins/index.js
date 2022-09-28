import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
//--------------------------

const Admin = () => {
//-------------------------------
const {id} = useParams()


//-------------------------------- create new Product
/*const createNewProduct = () => {
    axios.post('http://localhost:5000/products/', {img, productName, description, price, ItemsCounter})
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
}*/

 //---------------------------------------update product by id

  const updateProductById = () => {
    axios
      .put(`http://localhost:5000/products/${id}`, {
        productName: newProductName,
        description: newDescription,
        price: newPrice,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };



    return (
        <div>
            
        </div>
    );
}

export default Admin;

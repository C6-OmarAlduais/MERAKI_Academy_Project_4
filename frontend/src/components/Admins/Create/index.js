import {React, useContext, useState} from 'react';
import axios from 'axios';
import { appContext } from '../../../App';

const CreateProduct = () => {
    
    const{token}= useContext(appContext)
    //---------------------------------

  const [message, setMessage] = useState("");
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  
     //-------------------------------- create new Product

  const createNewProduct = () => {
    axios.post('http://localhost:5000/products/', {productName, description, price}, {headers:{Authorization:`Bearer ${token}`}})
    .then((res)=>{
        //console.log(res);
    })
    .catch((err)=>{
       setMessage(err.response.data.message)
    })
}



    return (
        <div>
            <input onChange={(e)=>{
                setProductName(e.target.value)
            }} type={'text'} placeholder={'produckt name'}></input>

<textarea onChange={(e)=>{
                setDescription(e.target.value)
            }} type={'text'} placeholder={'description'}></textarea>

<input onChange={(e)=>{
                setPrice(e.target.value)
            }} type={'text'} placeholder={'price'}></input>
            <button onClick={createNewProduct}>Create</button>
        </div>
    );
}

export default CreateProduct;

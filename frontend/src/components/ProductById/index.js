import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { appContext } from '../../App';

//--------------------------------

const ProductById = () => {

//--------------------------------

const {id} = useParams()
//console.log(id);

//-------------------------------

const [product, setProduct] = useState({});
const [comment, setComment] = useState('');

//--------------------------------

const {token} = useContext(appContext)

//--------------------------------

    const getProductById = () => {
        axios.get(`http://localhost:5000/products/search_1?id=${id}`)
        .then((res)=>{
      //      console.log(res.data.product[0]);
           setProduct(res.data.product[0])
    
        })
        .catch((err)=>{
            console.log(err);
    
        })
      }
      const addComment = async () => {
        
        try {
            await axios.post(`http://localhost:5000/products/${id}/comments`, {comment,}, {headers:{Authorization: `Bearer ${token}`}})
        } catch (err) {
            console.log(err.response); 
        }
      }
      useEffect(() => {
       getProductById()
      }, []);

    return (
        <div>
            <h3>{product.productName}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.comments && product.comments.comment}</p>
         
            <input onChange={(e)=>{setComment(e.target.value)}} type={'text'} placeholder={'Write Your Comment...'}></input>
            <button onClick={addComment}>Add Comment</button>
        </div>
    );
}

export default ProductById;
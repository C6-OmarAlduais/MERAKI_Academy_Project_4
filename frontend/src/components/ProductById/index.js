import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { appContext } from '../../App';
import "./style.css";


//--------------------------------

const ProductById = () => {

//--------------------------------
const navigate = useNavigate()
const {id} = useParams()
//console.log(id);

//-------------------------------

const [product, setProduct] = useState({});
const [comment, setComment] = useState('');
const [message, setMessage] = useState("");


//--------------------------------

const {token, allProducts, setAllProducts} = useContext(appContext)

//--------------------------------

const getProductById = () => {
    axios.get(`http://localhost:5000/products/search_1?id=${id}`)
    .then((res)=>{
             console.log(res);
        setProduct(res.data.product[0])
        
    })
    .catch((err)=>{
        console.log(err);
        
    })
}
const addComment = () => {
        
        axios.post(`http://localhost:5000/products/${id}/comments`, {comment,}, {headers:{Authorization: `Bearer ${token}`}})
        .then((res)=>{
            console.log(product);
        })
        .catch ((err)=>{
            console.log(err.response); 
        }) 
      }

      const deleteProductById = () => {
        axios.delete(`http://localhost:5000/products/${id}`, {headers:{Authorization:`Bearer ${token}`}})
        .then((res)=>{
            // console.log(res);
            const deletedProduct = allProducts.filter((product)=>{
                return product._id !== id
            })
            setAllProducts(deletedProduct)

            navigate('/home')



        })
        .catch((err)=>{
            setMessage(err.response.data.message)
        })
      }
      useEffect(() => {
       getProductById()
      }, []);

    return (
        <div className='main'>
        <div className="item-by-id">
            <h2>{product.brand}</h2>
            <h3>{product.productName}</h3>
            <img className="product-img" src={product.image} alt={product.productName}></img>
            <div className="price-desc">
              <p>{product.description}</p>
              <p>{product.price}</p>
              </div>
              </div>
            <p>{product.comments && product.comments.comment}</p>
         
            <input className='input-comment' onChange={(e)=>{setComment(e.target.value)}} type={'text'} placeholder={'Write Your Comment...'}></input>
            <button className='button' onClick={addComment}>Add Comment</button>
            
            <button className='button' onClick={()=>navigate(`/update/${id}`)}>Update</button>
            <button className='button' onClick={deleteProductById}>Delete</button>
            <button className='button' onClick={()=>navigate(`/create`)}>Create</button>
        </div>
    );
}

export default ProductById;

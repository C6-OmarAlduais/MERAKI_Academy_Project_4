import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductById = () => {
const {id} = useParams()
console.log(id);
const [product, setProduct] = useState({});

    const getProductById = () => {
        axios.get(`http://localhost:5000/products/search_1?id=${id}`)
        .then((res)=>{
            console.log(res.data.product[0]);
           setProduct(res.data.product[0])
    
        })
        .catch((err)=>{
            console.log(err);
    
        })
      }
      useEffect(() => {
       getProductById()
      }, []);

    return (
        <div>
            <h3>{product.productName}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    );
}

export default ProductById;

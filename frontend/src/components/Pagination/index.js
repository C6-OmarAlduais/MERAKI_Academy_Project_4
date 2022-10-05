import React from 'react';
import "./style.css";


const Pagination = ({productsPerPage, totalProducts, paginate}) => {
const pageNums = []
for (let i = 1; i <= Math.ceil(totalProducts/productsPerPage); i++) {
    pageNums.push(i)
}

    return (
        <nav>
            <div className='pages'>
                {pageNums.map(number=>(
                    <p  key={number}>
                        <a className='num' onClick={()=> paginate(number)} href='/!#'>
                            {number}
                        </a>
                    </p>
                ))}
            </div>
            
        </nav>
    );
}

export default Pagination;

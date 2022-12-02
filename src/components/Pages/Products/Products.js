import React from 'react';

const Products = ({product}) => {
    return (
        <div>
            <img src={product.image} alt="" />
            <h1>{product.title}</h1>
            <p>{product.category}</p>
            <p>{product.brand}</p>
            <p>{product.description}</p>
        </div>
    );
};

export default Products;
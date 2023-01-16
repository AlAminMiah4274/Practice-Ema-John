import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, price, ratings, seller } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-text'>
                <p className='product-name'><big>{name}</big></p>
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings}</small></p>
            </div>
        </div>
    );
};

export default Product;
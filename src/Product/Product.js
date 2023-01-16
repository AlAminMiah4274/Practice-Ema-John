import React from 'react';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    const { img, name, price, ratings, seller } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-text'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p className='product-rating'><small>Rating: {ratings}</small></p>
            </div>
            <button className='btn-cart' onClick={() => handleAddToCart(product)}>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;
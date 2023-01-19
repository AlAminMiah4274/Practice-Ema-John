import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import { addToDb } from '../../utilities/fakedb';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <h2 className='cart-header'>Order Summary</h2>
                <div className='cart-info'>
                    <p>Selected Items: {cart.length}</p>
                    <p>Total Price: $</p>
                    <p>Total Shipping Charge: $</p>
                    <p>Tax: $</p>
                    <h4>Grand Total: $</h4>
                </div>
            </div>
        </div>
    );
};

export default Shop;
import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);
    return (
        <div className='shop-container'>
            <div className='product-container'>
                <Product></Product>
            </div>
            <div className='summary-container'>
                <h2>Order summary</h2>
            </div>
        </div>
    );
};

export default Shop;
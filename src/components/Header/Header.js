import React from 'react';
import Logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='navbar'>
            <img src={Logo} alt="" />
            <div className='nav-text'>
                <a href="/order">Order</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;
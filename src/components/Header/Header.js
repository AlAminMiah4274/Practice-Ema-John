import React from 'react';
import Logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='navbar'>
            <img src={Logo} alt="" />
        </nav>
    );
};

export default Header;
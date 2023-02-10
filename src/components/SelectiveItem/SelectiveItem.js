import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SelectiveItem.css'

const SelectiveItem = ({ product, handleSelectiveItem }) => {
    const { id, img, name, price, shipping, quantity } = product;
    return (
        <div className='stored-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='stored-item-container'>
                <div className='stored-item-details'>
                    <p>{name}</p>
                    <p><small>Quantity: {quantity}</small></p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Shipping Charge: ${shipping}</small></p>
                </div>
                <div className='btn-container'>
                    <button onClick={() => handleSelectiveItem(id)} className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SelectiveItem;
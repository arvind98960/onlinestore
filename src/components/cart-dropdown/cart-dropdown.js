import React, { Component } from 'react';
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button'

function CartDropdown() {
    return ( 
        <div className="cart-dropdown">
            <div className="cart-items">
                
            </div>
            <CustomButton>Go To Checkout</CustomButton>
        </div>
     );
}

export default CartDropdown;
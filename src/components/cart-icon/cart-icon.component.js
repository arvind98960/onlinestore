import React from 'react'
import {connect} from 'react-redux'
import './cart-icon.styles.scss'
import {toggleCartHidden } from '../../redux/cart/cart.action'
import { ReactComponent as ShoppingIcon } from '../../assest/shopping-bag.svg'

const CartIcon = ({toggleCartHidden}) => (
  
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">1</span>
    </div>
);
const mapStateToProps = dispatch => ({
    toggleCartHidden: () =>
        dispatch(toggleCartHidden())
})

export default connect(null,mapStateToProps)(CartIcon);
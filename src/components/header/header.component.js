import React from 'react';
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assest/crown.svg'
import './header.styles.scss'
function Header() {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>Shop</Link>
                <Link className='option' to='/shop'>Contact</Link>
            </div>
        </div>
    );
}

export default Header;
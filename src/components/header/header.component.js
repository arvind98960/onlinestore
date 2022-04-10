import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assest/crown.svg'
import './header.styles.scss'
function Header({currentUser}) {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>Shop</Link>
                <Link className='option' to='/shop'>Contact</Link>
                {
                    currentUser ?
                        <div className='option' onClick={() => auth.signOut()}>SignOut</div>
                        :
                        <Link className='option' to='/signin'>SignIn</Link>
                }
            </div>
        </div>
    );
}

export default Header;
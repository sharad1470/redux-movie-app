import React from 'react';
import User from '../../images/User.png'
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <Link to="/">
            <div className='logo'>Movie App</div>
            </Link>
                <div className='user-image'>
                    <img src={ User } alt=""/>
                </div>
            
            
        </div>
    );
};

export default Header;


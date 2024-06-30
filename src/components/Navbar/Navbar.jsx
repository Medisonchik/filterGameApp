import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import menu from '../../data/navMenu';


function Navbar(props) {
    return (
        <div className='navbar'>
            <div className='logo-menu'>
                <img className='navbar-logo' src='/logo.svg' alt='logo' />
                <ul className='navbar-menu'>
                    {menu.map((list, index) => (
                        <li key={index}>
                          <Link to={list.path}>{list.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <button className='navbar-btn' type='button'>Get Started</button>

            
        </div>
    );
}

export default Navbar;
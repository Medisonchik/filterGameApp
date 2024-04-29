import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {

    const menu = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'Explore',
            path: '/explore'
        },
        {
            id: 3,
            name: 'Contact us',
            path: '/contactUs'
        }
    ];
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
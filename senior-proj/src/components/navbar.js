import React from 'react';
import {
    Nav,
    NavLink,
    NavBtn,
    NavBtnLink,
} from './navbarElements';
import '../App.css';

const Navbar = () => {
    return (
        <>
            <Nav>
                 <NavLink
                    className="navbar-item"
                    to='/' activeStyle>
                    logo
                </NavLink>
                <NavLink
                    className="navbar-item"
                    to='/about' activeStyle>
                        About
                </NavLink>
            </Nav>
        </>
    );
};

export default Navbar;
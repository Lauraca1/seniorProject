import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom'

function welcome() {

    return (
        <div className='standard'>
            <h1>hello world</h1>

            <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/sign-up"
                exact
            >sign up
            </NavLink>

            <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/log-in"
                exact
            >log in
            </NavLink>

            <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/about"
                exact
            >about
            </NavLink>

        </div>
    );
}

export default welcome;
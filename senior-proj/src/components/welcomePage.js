import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';


function MyButton(props) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(props.where);
    }

    return (
        <div className="button-container">
        <Button className="butt" onClick={handleClick}> {props.words}</Button>
        </div>
    );
}


function welcome() {

    return (
        <div className='standard'>
            <h1 className="welcome" >welcome:^)</h1>
            <MyButton words="sign up" where='/sign-up' />

            <br></br>

{            <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/log-in"
                exact
            >already have an account?
            </NavLink>}

        </div>
    );
}

export default welcome;
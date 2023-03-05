import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function MyForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Submitted form with email: ${email}, password: ${password}`);
        setError('');
        navigate('/home-page');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}


function logIn() {

    return (
        <div className='standard'>
            <h1>log in</h1>
            <MyForm />

        </div>
    );
}

export default logIn;
import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function MyForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email.endsWith('@calpoly.edu')) {
            console.log(`Submitted form with name: ${name}, email: ${email}, password: ${password}`);
            setError('');
            navigate('/email-verification');
        } else {
            setError('Please enter an email address with domain example.com');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
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

function signUP() {

    return (
        <div className='standard'>
            <h1>sign up</h1>
            <MyForm/>
        </div>
    );
}

export default signUP;
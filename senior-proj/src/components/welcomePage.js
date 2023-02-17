import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

function ShowBookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8082/api/books')
            .then((res) => {
                setBooks(res.data);
            })
            .catch((err) => {
                console.log('Error from ShowBookList');
            });
    }, []);

    return (
        <div className='ShowBookList'>
            <h1>hello world</h1>
        </div>
    );
}

export default ShowBookList;
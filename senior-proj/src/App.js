import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import ShowBookDetails from './components/ShowBookDetails';

import HomePage from './components/homePage';
import LogInPage from './components/logIn';
import SignUpPage from './components/createAccount';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route path='/log-in' element={<LogInPage />} />
                    <Route path='/sign-up' element={<SignUpPage />} />
                    <Route path='/show-book/:id' element={<ShowBookDetails />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
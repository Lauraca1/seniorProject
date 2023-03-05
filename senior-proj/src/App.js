import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './components/homePage';
import LogInPage from './components/logIn';
import SignUpPage from './components/createAccount';
import AboutPage from './components/aboutPage';
import PageNotFound from './components/404';
import AccountSettingsPage from './components/accountSettings';
import DeleteProfilePage from './components/deleteProfile';
import DeleteSecurityPage from './components/deleteProfileSecurityCheck';
import DeleteConfirmationPage from './components/deleteProfileConfirmation';
import EditItemPage from './components/editItemPage';
import EditStorePage from './components/editStoreFront';
import EmailVerificationPage from './components/emailVerification';
import InboxPage from './components/inbox';
import ItemPage from './components/itemPage';
import ItemPageOther from './components/itemPageOther';
import SearchItemsPage from './components/searchItems';
import SearchUsersPage from './components/searchUsers';
import StoreFrontPage from './components/storeFront';
import StoreFrontPageOther from './components/storeFrontOther';
import WelcomePage from './components/welcomePage';

import Navbar from './components/navbar';


const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<WelcomePage />} />
                    <Route path='/home-page' element={<HomePage />} />
                    <Route path='/log-in' element={<LogInPage />} />
                    <Route path='/sign-up' element={<SignUpPage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/account-settings' element={<AccountSettingsPage />} />
                    <Route path='/delete-profile' element={<DeleteProfilePage />} />
                    <Route path='/delete-profile-security' element={<DeleteSecurityPage />} />
                    <Route path='/delete-profile-confirmation' element={<DeleteConfirmationPage />} />
                    <Route path='/edit-item/:itemId' element={<EditItemPage />} />
                    <Route path='/edit-store' element={<EditStorePage />} />
                    <Route path='/email-verification' element={<EmailVerificationPage />} />
                    <Route path='/inbox' element={<InboxPage />} />
                    <Route path='/item/:itemId' element={<ItemPage />} />
                    <Route path='/item-other/:itemId' element={<ItemPageOther />} />
                    <Route path='/search-items' element={<SearchItemsPage />} />
                    <Route path='/search-users' element={<SearchUsersPage />} />
                    <Route path='/storefront' element={<StoreFrontPage />} />
                    <Route path='/storefront-other/:storeId' element={<StoreFrontPageOther />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
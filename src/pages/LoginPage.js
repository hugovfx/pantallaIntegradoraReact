// src/pages/LoginPage.js
import React from 'react';
import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LoginPage = () => {
    return (
        <div>
            <Navbar />
            <LoginForm />
            <Footer />
        </div>
    );
};

export default LoginPage;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-5">
            <div className="container">
                <div className="row py-4">
                    <div className="col-md-3">
                        <img src={logo} alt="Logo" style={{ width: '200px' }} />
                    </div>
                    <div className="col-md-6">
                        <h5 id="about">About us</h5>
                        <p id="abouttext">We are a website dedicated to offering a wide variety of products from students and staff of UTCH, promoting entrepreneurship and competitiveness.</p>
                    </div>
                    <div className="col-md-3">
                        <h5 id="links">Quick links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-white" id="home-link">Home</Link></li>
                            <li><Link to="/login" className="text-white" id="login-text">Login</Link></li>
                            <li><Link to="/register" className="text-white" id="register-text">Register</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-secondary text-center py-3">
                <p className="mb-0">© 2024 Tianguis UTCH.</p>
            </div>
        </footer>
    );
};

export default Footer;

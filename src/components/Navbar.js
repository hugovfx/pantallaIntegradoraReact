import React from 'react';
import { Link } from 'react-router-dom';
import flag from '../img/language.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{width: "100%"}}>
            <Link className="navbar-brand" to="/" id="home-link">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/register" id="register-text">Register</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="languageDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img id="language-img" src={flag} alt="Language" width="20" height="20" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="languageDropdown" id="language-options">
                            <a className="dropdown-item" href="#" data-lang="en">English</a>
                            <a className="dropdown-item" href="#" data-lang="es">Español</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

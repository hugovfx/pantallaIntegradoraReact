// src/components/LoginForm.js
import React from 'react';
import './LoginForm.css'; // Archivo CSS personalizado (lo creas tú)

const LoginForm = () => {
    return (
        <div className="login container mt-5">
            <h2>Tianguis UTCH</h2>
            <form id="login-form">
                <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-user"></i></span>
                    <input
                        id="email-placeholder"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="user_email"
                        required
                    />
                </div>
                <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                    <input
                        id="password-placeholder"
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="user_password"
                        required
                    />
                </div>
                <button type="submit" className="button float" id="button-submit">
                    Log in
                </button>
            </form>
        </div>
    );
};

export default LoginForm;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/footerstyle.css'; // Asegúrate de que esta ruta sea correcta
import ProfilePage from './pages/ProfilePage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/Profile" element={<ProfilePage/>} />
            </Routes>
        </Router>
    );
};

export default App;

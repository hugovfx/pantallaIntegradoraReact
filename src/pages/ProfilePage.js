import React from 'react';
import './ProfilePage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProfilePage = () => {
    const seller = {
        name: "Jesus Castilla",
        email: "arturocastilla4@gmail.com",
        university: "Universidad tecnologica de chihuahua",
        course: "Ingeniería de Software",
        products: [
            "Laptop robada",
            "Libros de texto de programación con lagrimas frescas",
            "Calculadora científica sin botones",
        ],
        bio: "Estudiante de Ingeniería bien hambreado, comprenme algo :)",
    };

    return (
        <div>
             <Navbar />

        <div className="profile-container">
            <h1>Perfil del Vendedor</h1>
            <div className="profile-info">
                <h2>{seller.name}</h2>
                <p>Email: {seller.email}</p>
                <p>Universidad: {seller.university}</p>
                <p>Curso: {seller.course}</p>
                <p>Bio: {seller.bio}</p>
                <h3>Productos en venta:</h3>
                <ul>
                    {seller.products.map((product, index) => (
                        <li key={index}>{product}</li>
                    ))}
                </ul>
            </div>
        </div>
        <Footer></Footer>
                    </div>
    );
};

export default ProfilePage;

// src/pages/Product.js
import React from 'react';
import Product from '../components/Product';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Productpage = () => {
    return (
        <div style={{alignItems:"center", display: "flex", flexDirection: "column"}}>
            <Navbar />
            <Product />
            <Footer />
        </div>
    );
};

export default Productpage;

// src/pages/LoginPage.js
import React from 'react';
import RegisterForm from '../components/RegisterForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Register (){
    return(
<div>
        <Navbar></Navbar>
            <RegisterForm></RegisterForm>
        <Footer></Footer>
</div>


    );
}

export default Register;

// src/components/LoginForm.js
import React from 'react';
import './Register.css'; 

function RegisterForm() {
    return(
        <div className="login container mt-9">
            <h2>Registro de usuario</h2>
            <form id="login-form">
                <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-user"></i></span>
        <input type="text" class="form-control" placeholder="Nombre" id="user_nombre" name="user_nombre" required/>
      </div>

      <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-user"></i></span>
        <input type="text" class="form-control" placeholder="Apellido" id="user_apellido" name="user_apellido" required/>
      </div>

      <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-lock"></i></span>
        <input type="password" class="form-control" placeholder="Contrase;a" id="user_password" name="user_password" required/>
      </div>

      <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
        <input type="email" class="form-control" placeholder="Correo Electronico" id="user_email" name="user_email" required/>
      </div>

                <button type="submit" className="button float" id="button-submit">
                    Registrarse
                </button>
            </form>
        </div>
    );
}

export default RegisterForm;
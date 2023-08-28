import React, { useState } from "react";

import "../login/Login.css"

import alertify from "alertifyjs";
import 'alertifyjs/build/css/alertify.css';

import burgerLogo from "../../assets/backgroundyok.png";



const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    

    

    return ( 
    
      <div>
            <div>
            <div className="auth-form-container"> 
                <h2><strong>Soft Burger'e Hoşgeldiniz</strong></h2>
                <form className="login-form" >
                    <label htmlFor="email">E-Posta </label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="E-posta" id="email" name="email" required/>
                    <label htmlFor="password">Şifre</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Şifre" id="password" name="password" required />
                    <button className="login-btn" type="submit" ><strong>Giriş Yap</strong></button>
                </form>
                <button className="register-link-btn" onClick={() => props.onFormSwitch('register') }> <strong>Kaydol</strong> </button>
            </div>
            </div>
    </div>  
  )
}

export default Login
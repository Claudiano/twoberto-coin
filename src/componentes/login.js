import React from 'react';

import './login.css';


function Login(){
    return (
        <div className="ctn-login">
          
            <div className="ctn-logo">
                <img src="https://assets.xtechcommerce.com/uploads/images/full/f9d3522f884b7d54e0bbad4f1e345721.jpg" />

            </div>
            <div className="ctn-form">
                <p>Email</p>
                <input className="cls-input" name="Email" />
                <p>senha:</p>
                <input className="cls-input" type="password" name="Senha" />
                <button className="cls-button" >logar</button>
            </div>
        </div>
    )
}


export default Login


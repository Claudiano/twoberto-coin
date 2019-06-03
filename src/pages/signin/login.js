import React, {Component} from 'react';
import api from "../../services/api";
import { login } from "../../services/auth";

import './login.css';
import coin from '../../assets/images/coin.jpeg';

class Login extends Component {
    state = {
        email: "",
        password: "",
        error: ""
      };
    
    handleSignIn = () => {
        const { email, password } = this.state;
        if (!email || !password) {
            this.setState({ error: "Preencha e-mail e senha para continuar!" });
            console.log("aqui 1")
        } else {
            try {
                // usuario para teste
                const usuario = {
                    email: "teste@email",
                    nome: "Twoberto",
                    senha: "String",
                    role: "ADMIN",
                    saldo: 9999.5
                }
                console.log("tentando logar")
            //const response = api.post("/usuarios", { email, password });
            //console.log("resposta: " + response)
            //login(response.data.token);
            //this.props.history.push("/app");
            
            if(this.state.email === "teste@gmail.com" && this.state.password === "123"){
                this.props.history.push("/app", {usuario: usuario});
            } else {
                alert("Registro nao encontrado, verifique email e senha")
            }
            
            } catch (err) {
            this.setState({
                error:
                "Houve um problema com o login, verifique suas credenciais. T.T"
            });
            }
        }
    };

    handlerSignUp = () => {
        this.props.history.push("/signup")
    }

    render() {
        
        return (
            <div className="ctn-login">
          
            <div className="ctn-logo">
                <img src={coin} />

            </div>
            <div className="ctn-form">
          
                <h1>Insira suas credenciais</h1>
                <input className="cls-input" placeholder="Email" onChange={e => this.setState({ email: e.target.value })} name="Email" />
                <input className="cls-input" placeholder="Senha" type="password" name="Senha" onChange={e => this.setState({ password: e.target.value })}/>
          
                <button className="cls-button" onClick={() => this.handleSignIn()} >logar</button>
          
                <a onClick={() => this.handlerSignUp()}>Clique aqui para se cadastrar</a>
            </div>
        </div>
    )
    }
}


export default Login


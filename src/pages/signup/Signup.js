import React, {Component} from 'react';
import coin from '../../assets/images/coin.jpeg'
import './Signup.css';
import api from '../../services/api';

class Signup extends Component{

    state = {
        email: "",
        nome: "",
        senha: "",
        senhaRepitida: ""
       }

       cadastrarUsuario = () => {
        const usuario = {
            email: String,
            nome: String,
            senha: String,
            role: "ADMIN",
            saldo: 0
        }
        console.log("Cadastrando usuario...")
        if(this.state.senha !== this.state.senhaRepitida){
            alert("Insira senhas iguais")
        }
        if(this.state.email === "" || this.state.email === NaN ||
            this.state.nome === "" || this.state.nome === NaN ||
            this.state.senha === "" || this.state.senha === NaN
        ) {
            console.log("Preencha todos os campos")
            alert("Preencha todos os campos")
        } else {
            try {
                
                usuario.nome = this.state.nome;
                usuario.email = this.state.email;
                usuario.senha = this.state.senha;

                await api.post("/usuarios", {usuario});
                
                console.log("usuario cadastrado");
                console.log(this.usuario);
                this.props.history.push("/");
                // enviar dados para o backend
            } catch (error) {
                console.log(error)
                alert("Ocorreu o erro: " + error)
            }
        }
    }
    
    render(){
        return (
            <div className="ctn-login">

                <div className="ctn-logo">
                    <img src={coin} />
                </div>
                <div className="ctn-form">
          
                    <h1>Insira suas informações</h1>
                    <input className="cls-input" 
                        placeholder="Nome" 
                        onChange={e => this.setState({ nome: e.target.value })} 
                        name="Nome" />

                    <input className="cls-input" 
                        placeholder="Email" 
                        onChange={e => this.setState({ email: e.target.value })} 
                        name="Email" />

                    <input className="cls-input" 
                        placeholder="Senha" 
                        type="password" 
                        name="Senha" 
                        onChange={e => this.setState({ senha: e.target.value })}/>
                    
                    <input className="cls-input" 
                        placeholder="Repita a senha" 
                        type="password" 
                        name="SenhaRepitida" 
                        onChange={e => this.setState({ senhaRepitida: e.target.value })}/>
                
                    <button className="cls-button" onClick={() => this.cadastrarUsuario()} >Cadastrar</button>
                  
                </div>
            </div>
        )
    }
}


export default Signup


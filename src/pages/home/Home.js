import React, {Component} from 'react';

import './home.css';

import coin from '../../assets/images/coin.jpeg';



class Dashboard extends Component{
    saldo = 0
    constructor(props){
        super(props)
        const usuario = this.props.location.state.usuario
        this.state = {
            email: usuario.email,
            nome: usuario.nome,
            valorVender: 0,
            valorComprar: 0,
            
            
        };
        this.saldo = usuario.saldo
        console.log()
    }


    comprarCoin(){
        if ( Number.parseFloat(this.state.valorComprar) <= 0 || this.state.valorComprar === NaN ){
            alert("Valor inválido")
        } else {
            this.setState({saldo: this.state.saldo + this.state.valorComprar})
            this.saldo += Number.parseFloat(this.state.valorComprar)
        }
    }

    venderCoins(){
        if(Number.parseFloat(this.saldo) <= 0 || this.saldo < this.state.valorVender){
            alert("você não possui saldo para essa operação")
        } else if ( Number.parseFloat(this.state.valorVender) <= 0 || this.state.valorVender === NaN ){
            alert("Valor inválido")
        } else {
            this.setState({saldo: this.state.saldo - this.state.valorComprar})
            this.saldo -= Number.parseFloat(this.state.valorVender)
        }
    }

    render(){    
        return (
            <div className="ctn-home">
          
            <div className="ctn-logo">
                <img src={coin} />  
            </div>
            <div className="ctn-info">
                <h2>Usuario: {this.state.nome}</h2>
                
                <p>Saldo: R$ {this.saldo}</p>

                <input className="cls-input" 
                    placeholder="Valor coins" 
                    type="number"  
                    onChange={e => this.setState({ valorVender: e.target.value }) }/>
                <button className="cls-button" onClick={() => this.venderCoins()} >vender</button>

                <input className="cls-input" 
                    placeholder="Valor coins" 
                    type="number"  
                    onChange={e => this.setState({ valorComprar: e.target.value }) }/>
                <button className="cls-button" onClick={() => this.comprarCoin()}>comprar</button>
            </div>
        </div>
    )
    }
}

export default Dashboard;


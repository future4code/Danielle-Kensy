import React from 'react';
import styled from 'styled-components'

const MessageField = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
`
const Mensagem = styled.input`
    flex-grow: 1;
`
const MessageBox = styled.span`
    width: 100%;
    display: flex;
    margin-left: 10px;
    text-align: center;
    p {
        margin-left: 5px;
        margin-top: 22px;
    }
`

const Chat = styled.span`
    width: 100%;
`

const Button = styled.button`
    background-color: black;
    color: white;
    width: 8vw;
`

export class Message extends React.Component {
    state = {
        mensagens: [{
            usuario:"",
            mensagem: "",

        }],
        inputUsuario: "",
        inputMensagem: "",
        enviar: false
    }

    enviarMensagem = () => {
        //Objeto Nova Mensagem
        const novaMensagem = {
            usuario: this.state.inputUsuario,
            mensagem: this.state.inputMensagem
        } 

        //Adicionando o objeto de nova mensagem dentro do array de mensagens
        const novasMensagens = [...this.state.mensagens, novaMensagem]
        this.setState({mensagens: novasMensagens})

        //Limpando Inputs
        this.setState({inputUsuario: ""})
        this.setState({inputMensagem: ""})
    }

     //OnChange para os inputs
    onChangeNome = (event) => {
      this.setState({inputUsuario: event.target.value})  
    }

    onChangeMensagem = (event) => {
        this.setState({inputMensagem: event.target.value})  
    }

    render() {

        //Mapeando array mensagens
        const MensagensNovas = this.state.mensagens.map((mensagem) => {
            return(
               <div>
                    <MessageBox>
                        <h4>{mensagem.usuario}: </h4>
                        <p>{mensagem.mensagem}</p>
                    </MessageBox>
               </div>
            )
        }) 

        return <Chat>
            {MensagensNovas}

            <MessageField>
                <input  
                value={this.state.inputUsuario} 
                onChange={this.onChangeNome} 
                placeholder="Usuário"/>
                <Mensagem 
                 value={this.state.inputMensagem} 
                 onChange={this.onChangeMensagem} 
                 placeholder="Mensagem"/>
                <Button onClick={this.enviarMensagem}>Enviar</Button>
            </MessageField>
        </Chat> 
    }
}
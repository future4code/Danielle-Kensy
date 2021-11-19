import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

const Input = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column 
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    postagens: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150',
      },
      {
        nomeUsuario: 'Danizinha',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/151',
      },
      {
        nomeUsuario: 'Mariazinha',
        fotoUsuario: 'https://picsum.photos/50/52',
        fotoPost: 'https://picsum.photos/200/152',
      }
    ],
    // váriaveis para input
    valorInputNome: "",
    valorInputFoto: "",
    valorInputPost: "",

  }

  adicionaPost = () => {
    //Obejto novo post
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFoto,
      fotoPost: this.state.valorInputPost
    }

    const novosPosts = [novoPost, ...this.state.postagens]
    this.setState({postagens: novosPosts})
    //LimPando Inputs
    this.setState({ valorInputNome: "" });
    this.setState({ valorInputFoto: "" });
    this.setState({ valorInputPost: "" });
  }
  //OnChange para os inputs
  onChangeNome = (event) => {
    this.setState({valorInputNome: event.target.value})
  }

  onChangeFoto = (event) => {
    this.setState({valorInputFoto: event.target.value})
  }

  onChangePost = (event) => {
    this.setState({valorInputPost: event.target.value})
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
    this.setState({
      curtido: !this.state.curtido,
    })
  }

  onClickComentario = () => {
    console.log('apertou')
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {

    let iconeCurtida
    let quantidadeCurtida = this.state.numeroCurtidas

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
      quantidadeCurtida =+ 1
    } else {
      iconeCurtida = iconeCoracaoBranco
      quantidadeCurtida = 0
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    const PostagemFeed = this.state.postagens.map((postagem) => {
      return (
        <PostContainer>
          <PostHeader>
            <UserPhoto src={postagem.fotoUsuario} alt={'Imagem do usuario'}/>
            <p>{postagem.nomeUsuario}</p>
          </PostHeader>

          <PostPhoto src={postagem.fotoPost} alt={'Imagem do post'}/>

          <PostFooter>
            <IconeComContador
              icone={iconeCurtida}
              onClickIcone={this.onClickCurtida}
              valorContador={quantidadeCurtida}
            />

            <IconeComContador
              icone={iconeComentario}
              onClickIcone={this.onClickComentario}
              valorContador={this.state.numeroComentarios}
            />
          </PostFooter>
          {componenteComentario}
        </PostContainer>
      )
    })

    return <div>
        <Input> 
          <input
          value ={this.state.valorInputNome}
          onChange={this.onChangeNome}
          placeholder="Nome" 
          />
          <input
          value ={this.state.valorInputFoto}
          onChange={this.onChangeFoto}
          placeholder="Link Perfil" 
          />
          <input
          value ={this.state.valorInputPost}
          onChange={this.onChangePost}
          placeholder="Link Post" 
          />
          <button onClick={this.adicionaPost}>
            Postar
          </button>
        </Input> 
        {PostagemFeed}
      </div>
  }
}

export default Post
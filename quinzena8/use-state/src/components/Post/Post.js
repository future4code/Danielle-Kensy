import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  //Configurando os states por meio do useState
  const [curtida, setCurtida] = useState(false)
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [comentado, setComentado] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [comentarios, setComentarios] = useState([])


  const onClickCurtida = () => {

    if (curtida) {
      setCurtida(!curtida)
      setNumeroCurtidas(0)

    } else {
      setCurtida(!curtida)
      setNumeroCurtidas(+ 1)
    }
  };

  const onClickComentario = () => {
    setComentado(!comentado)
  };

  const enviarComentario = (comentario) => {

    setComentarios([...comentarios, comentario])
    setComentado(false)
    setNumeroComentarios(+1)

  }

  const iconeCurtida = curtida ? (iconeCoracaoPreto) : (iconeCoracaoBranco)

  const caixaDeComentario = comentado ? (
 
    <SecaoComentario enviarComentario={enviarComentario}/>
  ) : (
    comentarios.map(comentario => {
      return (
        <CommentContainer>
          <p>{comentario}</p>
        </CommentContainer>
      )
    })
  )

  return (

    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )
}

export default Post
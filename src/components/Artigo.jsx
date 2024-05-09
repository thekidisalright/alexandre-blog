import React from 'react'
import style from "./Artigo.module.css"
import { Link } from 'react-router-dom';

const Artigo = ({artigo, click}) => {
  return (
    <Link to={`/alexandre-blog/${artigo.id}`} className={style.artigo} onClick={() => click(artigo.id)}>
      <span className={style.categoria}>{artigo.categoria}</span>
      <h1 className={style.titulo}>{artigo.titulo}</h1>
      <p className={style.conteudo}>{artigo.conteudo}</p>
      <span className={style.data}>{artigo.data}</span>
    </Link>
  )
}

export default Artigo
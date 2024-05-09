import React from 'react'
import { artigos } from '../components/ListaArtigos'
import { useParams } from 'react-router-dom'
import style from './Open.module.css'
import { Link } from 'react-router-dom'

const Open = () => {
  const { id } = useParams();

  const artigo = artigos.find((artigo) => artigo.id == id);

  return (
    <div className={style.page}>
    <div className={style.header}>
      <Link to={'/alexandre-blog'} className={style.close}>Fechar</Link>
    </div>
    <div className={style.artigo}>
      <div className={style.wrapperTitulo}>
        <h1 className={style.titulo}>{artigo.titulo}</h1>
        <div className={style.desc}>
          <span className={style.data}>{artigo.data}</span>
          <span>&#183;</span>
          <span className={style.categoria}>{artigo.categoria}</span>
        </div>
      </div>
      <div className={style.conteudo}>{artigo.conteudo}</div>
    </div>
  </div>
  )
}

export default Open
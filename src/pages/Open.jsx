import React from "react";
import { useParams } from "react-router-dom";
import style from "./Open.module.css";
import { Link } from "react-router-dom";

const Open = ({ artigos }) => {
  const { id } = useParams();

  const artigo = artigos.find((artigo) => artigo.id == id);

  return (
    <div className={style.page}>
      <div className={style.header}>
        <Link to={"/alexandre-blog"} className={style.close}>
          Fechar
        </Link>
        <Link to={`/alexandre-blog/editar-artigo/${id}`} className={style.editar}>
          Editar
        </Link>
      </div>
      {artigo ? (
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
      ) : (
        <div className={style.erro}>
          <span>Ops! Algo deu errado.</span>
          <h1>Artigo não encontrado</h1>
        </div>
      )}
    </div>
  );
};

export default Open;

import style from "./Adicionar.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const Adicionar = ({ artigos, setArtigos }) => {

  const navigate = useNavigate();

  const { id } = useParams();
  const artigo = artigos.find((artigo) => artigo.id == id);

  const [titulo, setTitulo] = useState(artigo.titulo);
  const [categoria, setCategoria] = useState(artigo.categoria);
  const [conteudo, setConteudo] = useState(artigo.conteudo);

  const handleSubmit = (e) => {
    e.preventDefault();

    const index = id - 1;

    const novoArtigo = {
      id: artigo.id,
      data: artigo.data,
      titulo: titulo,
      categoria: categoria,
      conteudo: conteudo
    }

    const novaArray = [...artigos];
    novaArray[index] = novoArtigo;

    localStorage.setItem('artigos', JSON.stringify(novaArray));
    setArtigos(JSON.parse(localStorage.getItem('artigos')))
    navigate(`/alexandre-blog/artigo/${artigo.id}`)
  };

  return (
    <div className={style.page}>
      <div className={style.header}>
        <Link to={"/alexandre-blog"} className={style.close}>
          Fechar
        </Link>
      </div>
      {artigo ? (
        <form className={style.form} onSubmit={handleSubmit}>
          <input type="text" className={style.titulo} value={titulo} onChange={(e) => setTitulo(e.target.value)} />
          <input type="text" className={style.categoria} value={categoria} onChange={(e) => setCategoria(e.target.value)} />
          <textarea type="text" className={style.conteudo} value={conteudo} onChange={(e) => setConteudo(e.target.value)} />
          <button className={style.btn} type="submit">Editar</button>
        </form>
      ) : (
        <div className={style.erro}>
          <span>Ops! Algo deu errado.</span>
          <h1>Artigo não encontrado</h1>
        </div>
      )}
    </div>
  );
};

export default Adicionar;

import { useState } from "react";
import style from "./App.module.css";
import Artigo from "./components/Artigo";
import Modal from "./components/Modal";
import { artigos } from "./components/ListaArtigos";

function App() {
  const [modal, setModal] = useState(false);
  const [artigo, setArtigo] = useState({});

  const handleClick = (id) => {
    setModal(!modal);
    setArtigo(artigos.find((artigo) => artigo.id === id));
  };

  return (
    <>
      <div className={style.header}>
        <h1 className={style.brand}>
          Alexandre <span>{modal ? artigo.categoria : "Blog"}</span>
        </h1>
      </div>
      <div className={style.container}>
        <div className={style.blogHeader}>
          <h1 className={style.blogTitle}>Artigos</h1>
          <span className={style.desc}>{artigos.length} publicações</span>
        </div>
        <div className={style.artigos}>
          {artigos.map((artigo, id) => (
            <Artigo key={id} artigo={artigo} click={handleClick} />
          ))}
        </div>
      </div>
      <Modal modal={modal} setModal={setModal} artigo={artigo} />
    </>
  );
}

export default App;

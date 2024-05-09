import style from "./Home.module.css";
import { artigos } from "../components/ListaArtigos";
import Artigo from "../components/Artigo";
import Navbar from "../components/Navbar";
import { useState } from "react";

const Home = () => {
  const [artigo, setArtigo] = useState({});
  const [modal, setModal] = useState(false);

  const handleClick = (id) => {
    setModal(!modal);
  };

  return (
    <>
      <Navbar/>
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
    </>
  );
};

export default Home;

import style from "./Home.module.css";
import Artigo from "../components/Artigo";
import Navbar from "../components/Navbar";

const Home = ({ artigos }) => {
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <div className={style.blogHeader}>
          <h1 className={style.blogTitle}>Artigos</h1>
          <span className={style.desc}>{artigos.length} publicações</span>
        </div>
        <div className={style.artigos}>
          {artigos &&
            artigos.map((artigo, id) => <Artigo key={id} artigo={artigo} />)}
        </div>
      </div>
    </>
  );
};

export default Home;

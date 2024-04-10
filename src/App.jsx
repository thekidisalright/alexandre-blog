import { useState } from "react";
import style from "./App.module.css";
import Artigo from "./components/Artigo";
import Modal from "./components/Modal";

function App() {
  const [modal, setModal] = useState(false);
  const [artigo, setArtigo] = useState({});

  const artigos = [
    {
      id: 1,
      data: "09/04/2024",
      titulo: "Quem sou eu?",
      categoria: "Pessoal",
      conteudo:
        "Meu nome é Alexandre, e sou apaixonado por desenvolvimento web. Nos últimos anos, tenho dedicado tempo e esforço para explorar e aprimorar minhas habilidades em programação e design. Desde uma idade precoce, fui fascinado por tecnologia e arte, o que me levou a buscar conhecimento e experiência nesse campo. Sou motivado pela busca incessante pelo aprendizado e pela oportunidade de enfrentar desafios que me permitam crescer e me desenvolver tanto pessoal quanto profissionalmente. Acredito firmemente na importância de ter criatividade e mesclar a arte com a tecnologia para criar ótimas experiências para o usuário e estou comprometido em fazer uma contribuição significativa nesse domínio.",
    },
    {
      id: 2,
      data: "09/04/2024",
      titulo: "Eu sou eu",
      categoria: "Filmes",
      conteudo:
        "Meu nome é Alexandre, e sou apaixonado por desenvolvimento web. Nos últimos anos, tenho dedicado tempo e esforço para explorar e aprimorar minhas habilidades em programação e design. Desde uma idade precoce, fui fascinado por tecnologia e arte, o que me levou a buscar conhecimento e experiência nesse campo. Sou motivado pela busca incessante pelo aprendizado e pela oportunidade de enfrentar desafios que me permitam crescer e me desenvolver tanto pessoal quanto profissionalmente. Acredito firmemente na importância de ter criatividade e mesclar a arte com a tecnologia para criar ótimas experiências para o usuário e estou comprometido em fazer uma contribuição significativa nesse domínio.",
    },
  ];

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

import React from "react";
import PropTypes from "prop-types";
import style from "./Modal.module.css";

const Modal = ({ modal, setModal, artigo }) => {
  const estilo = modal ? `${style.modal} ${style.active}` : style.modal;
  const handleClick = () => {
    setModal(!modal);
  };

  return (
    <div className={estilo}>
      <div className={style.modalOverlay} onClick={handleClick}>
        <span className={style.close}>&times;</span>
      </div>
      <div className={style.modalContent}>
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
  );
};

Modal.propTypes = {
  modal: PropTypes.bool,
};

export default Modal;

import React from "react";
import styles from "./ItemDestaque.module.css";
import TitleClass from '../TitleClass';

const ItemDestaque = ({ card, titulo, corCategoria }) => {


  return (
    <div className={styles.itemDestaque}>
      <div className={styles.details}>
        <h2>{card.titulo}</h2>
        <p>{card.descricao}</p>
        <a href={card.video} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Assistir agora
        </a> 
      </div>
      <div className={styles.capa}>
        <img src={card.imagem} alt={card.titulo} className={styles.image} />
      </div>
    </div>
  );
};

export default ItemDestaque;

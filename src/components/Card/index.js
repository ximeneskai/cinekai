import { Link } from 'react-router-dom';
import styles from './Card.module.css';

function Card({ corCategoria, onEdit, deleteCard, id, titulo, categoria, imagem, video, descricao}) {
  return (
    <div className={styles.container} style={{ borderColor: corCategoria }}>
      <Link className={styles.link} to={`${video}`}>
        <img src={imagem} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
        <span className={categoria} style={{ backgroundColor: corCategoria }}>{categoria}</span>
        <p className={styles.descricao}>{descricao}</p>
      </Link>
    </div>
  );
}

export default Card;

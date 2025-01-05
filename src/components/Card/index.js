import { Link } from 'react-router-dom';
import styles from './Card.module.css';

function Card({ corCategoria, onEdit, deleteCard, id, titulo, categoria, imagem, video, descricao}) {
  return (
    <div className={styles.container} style={{ borderColor: corCategoria }}>
      <Link className={styles.link} to={`${video}`}>
        <img src={imagem} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
        <span className={categoria} style={{ backgroundColor: corCategoria }}>{categoria}</span>
      </Link>
      <div className={styles.buttons}>
        <button className={styles.btnDelete} onClick={() => deleteCard(id)}>
          <img src='/assets/remove.png' className={styles.icon} alt='Icone de Deletar' />
          DELETAR
        </button>
        <button
          className={styles.btnEdit}
          onClick={() => onEdit({ id, titulo, categoria, imagem, video, descricao })}
        >
          <img src='/assets/edit.png' className={styles.icon} alt='Icone de Editar' />
          EDITAR
        </button>
      </div>
    </div>
  );
}

export default Card;

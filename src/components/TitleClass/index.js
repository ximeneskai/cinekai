import styles from './TitleClass.module.css';

function TitleClass({titulo, corCategoria}) {
    return (
        <div className={styles.title} style={{ backgroundColor: corCategoria }}>
           <h1>{titulo}</h1>
        </div>
    );
}

export default TitleClass;
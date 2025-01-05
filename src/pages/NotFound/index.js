import styles from './NotFound.module.css'

function NotFound() {
    return (
        <>
        <div className={styles.container}>
            <h1>ERROR: 404</h1>
            <h2>PÁGINA NÃO ENCONTRADA</h2>
            <img src={'/assets/pngwing.com.png'} alt='Error 404 - Not Found'/>
            <h4>Acho que não tem nada pra assistir aqui...</h4>
        </div>
        </>
    )
}

export default NotFound;
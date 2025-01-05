import styles from './Footer.module.css'

function Footer() {
    return (
        <>
            <hr/>
            <footer className={styles.footer}>
                <img src='/assets/logo.png' alt='logo do AluraFlix'/>
                <p>Desenvolvido por Kai Ximenes - 2025.</p>
            </footer>
        
        </>
        
    )
}

export default Footer;
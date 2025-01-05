import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import HeaderLink from '../HeaderLink';
import BlueLine from '../BlueLine';

function Header() {
    return (
        <>
            <header className={styles.header}>
                <Link to="/">
                    <img className={styles.logo} src='/assets/logo.png' alt="Logo do AluraFlix" />
                </Link>
                <nav className={styles.links}>
                    <HeaderLink url="/">
                        HOME
                    </HeaderLink>
                    <HeaderLink url="/contact">
                        CONTATO
                    </HeaderLink>
                </nav>
            </header>
            <BlueLine />
        </>
        
        
    );
}

export default Header;
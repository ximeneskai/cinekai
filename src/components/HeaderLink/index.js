import { Link, useLocation } from 'react-router-dom';
import styles from './HeaderLink.module.css';

function HeaderLink({ url, children }) {

    const location = useLocation();

    const isActive = location.pathname === url;

    return (
        <Link 
            to={url} 
            className={`${styles.link} ${isActive ? styles.active : ''}`}>
            {children}
        </Link>
    )
}

export default HeaderLink;
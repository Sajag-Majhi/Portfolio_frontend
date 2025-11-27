import styles from './Footer.module.css'
import Logo_name from '../Logo_name/Logo_name';

function Footer(){
    return (
        <footer className={styles.footer}>
            <Logo_name colorClass={styles.color}/>
            <p>Copyright @2025 Sajag</p>
        </footer>
    );
}

export default Footer
import styles from './Header.module.css'
import Logo_name from '../Logo_name/Logo_name';

function Header(){
    const toggleNavbar =()=>{
        const nav = document.querySelector(`.${styles.navbar}`);
        nav.classList.toggle(styles.navbar_active);
    };

    return (
        <header className={styles.header}>
            <Logo_name/>

            <div className={styles.btn_burger} onClick={toggleNavbar}>≡</div>
            
            <nav className={styles.navbar}>
                <ul className={styles.menu}>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Project</a></li>
                    <li><a href="">Papers</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Services</a></li>
                </ul>
                <button className={styles.btn_CTA}>Contact</button>
            </nav>

            
        </header>
    );
}

export default Header;
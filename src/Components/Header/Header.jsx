import styles from './Header.module.css'

function Header(){
    const toggleNavbar =()=>{
        const nav = document.querySelector(`.${styles.navbar}`);
        nav.classList.toggle(styles.navbar_active);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo_name}>
                <div className={styles.logo}>S</div>
                <h1>Sajag</h1>
            </div>

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
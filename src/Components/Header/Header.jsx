import styles from './Header.module.css'
import Logo_name from '../Logo_name/Logo_name';

function Header(){
    const toggleNavbar =()=>{
        const nav = document.querySelector(`.${styles.navbar}`);
        nav.classList.toggle(styles.navbar_active);
    };

    const got_to_contact =()=>{
        const contact = document.getElementById("section_form");
        contact.scrollIntoView({ behavior: "smooth"});
        toggleNavbar();
    }

    return (
        <header className={styles.header}>
            <Logo_name/>

            <div className={styles.btn_burger} onClick={toggleNavbar}>≡</div>
            
            <nav className={styles.navbar}>
                <ul className={styles.menu}>
                    <li><a href="#aside_intro" onClick={toggleNavbar}>Home</a></li>
                    <li><a href="#section_about" onClick={toggleNavbar}>About</a></li>
                    <li><a href="#section_project" onClick={toggleNavbar}>Project</a></li>
                    <li><a href="#section_paper" onClick={toggleNavbar}>Papers</a></li>
                    <li><a href="#section_blogs" onClick={toggleNavbar}>Blog</a></li>
                    <li><a href="#section_services" onClick={toggleNavbar}>Services</a></li>
                </ul>
                <button className={styles.btn_CTA} onClick={got_to_contact}>Contact</button>
            </nav>

            
        </header>
    );
}

export default Header;
import styles from './Aside_intro.module.css'
import profile_pic from "../../assets/Vector/profile_pic.svg"

function Aside_intro(){
    return (
        <aside className={styles.aside}>
            <img src={profile_pic}/>
        </aside>
    );
}

export default Aside_intro;
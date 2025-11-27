import styles from './Logo_name.module.css'

function Logo_name({colorClass}){
    return(
        <div className={styles.logo_name}>
            <div className={styles.logo}>S</div>
            <h1 className={colorClass}>Sajag</h1>
        </div>
    );
}

export default Logo_name;
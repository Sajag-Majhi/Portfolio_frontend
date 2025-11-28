import styles from './Card.module.css'

function Card({title}){
    return(
        <article className={styles.article}>
            <div className={styles.description}>
                <h2>{title}</h2>
                <p>Description of {title} included here
                Such as what is the {title} about, 
                such that user can understand everything at 
                one glance
                </p>
                <button>View</button>
            </div>

        </article>
    );
}

export default Card;
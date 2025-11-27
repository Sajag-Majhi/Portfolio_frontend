import styles from './Section_paper.module.css'

function Section_paper(){
    return(
        <section className={styles.section}>
            <h1>Papers Published</h1>
            <div className={styles.paper}>
                <article>
                    <h2>Paper 1</h2>
                    <button>View</button>
                </article>

                
                <article>
                    <h2>Paper 2</h2>
                    <button>View</button>
                </article>
            </div>
        </section>
    );
}

export default Section_paper;
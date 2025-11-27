import styles from './Section_projects.module.css'

function Section_projects(){
    return(
        <section className={styles.section}>
            <h1>Projects</h1>

            <div className={styles.projects}>
                <article>
                    <h2>Project 1</h2>
                    <button>View</button>
                </article>

                <article>
                    <h2>Project 2</h2>
                    <button>View</button>
                </article>

                <article>
                    <h2>Project 3</h2>
                    <button>View</button>
                </article>

                <article>
                    <h2>Project 4</h2>
                    <button>View</button>
                </article>
            </div>

        </section>
    );
}

export default Section_projects;
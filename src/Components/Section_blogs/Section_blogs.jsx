import styles from './Section_blogs.module.css'

function Section_blogs(){
    return(
        <section className={styles.section}>
            <h1>Blogs</h1>

            <div className={styles.projects}>
                <article>
                    <h2>Blog 1</h2>
                    <button>View</button>
                </article>

                <article>
                    <h2>Blog 2</h2>
                    <button>View</button>
                </article>

                <article>
                    <h2>Blog 3</h2>
                    <button>View</button>
                </article>

                <article>
                    <h2>Blog 4</h2>
                    <button>View</button>
                </article>
            </div>

        </section>
    );
}

export default Section_blogs;
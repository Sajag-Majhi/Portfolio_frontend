import styles from './Section_intro.module.css'

function Section_intro(){
    return(
        <section className={styles.section}>
            <h1>Hello, I'm <br/><span id={styles.name}>Sajag Majhi</span></h1>

            <p>A dedicated Computer engineer with notable achievements in robotics  
                and strong academic performance. Proficient in programming, software development,
                and hardware design, eager to leverage my technical expertise in a career
                within the technology sector, with a keen interest in roles focused on
                software development and Artificial Intelligence.</p>
            
            <button className={styles.btn_hello}>Say hello</button>

            <section className={styles.stats}>
                <article>
                    <strong>2 Y.</strong>
                    <p>Experience</p>
                </article>

                <article>
                    <strong>15</strong>
                    <p>Projects Completed</p>
                </article>

                <article>
                    <strong>4</strong>
                    <p>Happy Clients</p>
                </article>
            </section>
        </section>
    );
}

export default Section_intro
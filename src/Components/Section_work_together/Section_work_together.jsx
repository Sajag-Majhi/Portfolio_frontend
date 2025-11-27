import styles from './Section_work_together.module.css'

function Section_work_together(){
    return (
        <section className={styles.section}>
            <h1>Do you have a project idea?? <br/>
                Let's discuss your project!</h1>

            <p>I can assist and contribute to the project with my expertise in skills in both 
                hardware such as robotics, manufacturing etc and software such as web development, 
                app development etc.
            </p>

            <button>Lets work together</button>
        </section>
    );
}

export default Section_work_together;
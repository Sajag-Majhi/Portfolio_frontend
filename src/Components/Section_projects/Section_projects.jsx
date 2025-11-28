import styles from './Section_projects.module.css'
import Card from '../Card/Card';

function Section_projects(){
    return(
        <section className={styles.section}>
            <h1>Projects</h1>

            <div className={styles.projects}>
                <Card title="Project 1"/>
                <Card title="Project 2"/>
                <Card title="Project 3"/>
                <Card title="Project 4"/>
            </div>

        </section>
    );
}

export default Section_projects;
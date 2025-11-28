import styles from './Section_paper.module.css'
import Card from '../Card/Card';

function Section_paper(){
    return(
        <section className={styles.section} id="section_paper">
            <h1>Papers Published</h1>
            <div className={styles.paper}>
                <Card title="Paper 1"/>
                <Card title="Paper 2"/>
            </div>
        </section>
    );
}

export default Section_paper;
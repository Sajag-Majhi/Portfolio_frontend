import styles from './Section_blogs.module.css'
import Card from '../Card/Card';

function Section_blogs(){
    return(
        <section className={styles.section} id="section_blogs">
            <h1>Blogs</h1>

            <div className={styles.projects}>
                <Card title="Blog 1"/>
                <Card title="Blog 2"/>
                <Card title="Blog 3"/>
                <Card title="Blog 4"/>
            </div>

        </section>
    );
}

export default Section_blogs;
import styles from './Section_form.module.css'
import arrow from '../../assets/Vector/btn_arrow.svg'

function Section_form(){
    return(
        <section className={styles.section} id="section_form">
            <h1>Contact</h1>
            <div className="form-floating w-100">
                <textarea className="form-control" placeholder="Leave a comment here" 
                id="floatingTextarea2" style={{height: '60px' , width: '100%',
                border: '1px solid #697484'}}></textarea>
                <label htmlFor="floatingTextarea2">Name</label>
            </div>

            <div className="form-floating w-100">
                <textarea className="form-control" placeholder="Leave a comment here" 
                id="floatingTextarea2" style={{height: '60px' , width: '100%', 
                border: '1px solid #697484'}}></textarea>
                <label htmlFor="floatingTextarea2">Email</label>
            </div>

            <div className="form-floating w-100">
                <textarea className="form-control" placeholder="Leave a comment here" 
                id="floatingTextarea2" style={{height: '150px' , width: '100%',
                border: '1px solid #697484'}}></textarea>
                <label htmlFor="floatingTextarea2">Message</label>
            </div>

            <button>Submit<img src={arrow}/></button>
        </section>
    );
}

export default Section_form;
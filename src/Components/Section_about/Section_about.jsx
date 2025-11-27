import styles from './Section_about.module.css'
import git_logo from "../../assets/Vector/github.ico"
import linkedin_logo from "../../assets/Vector/linkedin.ico"
import fb_logo from "../../assets/Vector/fb.ico"

function Section_about(){
    return(
        <section className={styles.section}>
            <h1>I am a Professional licensed <br/>Computer Engineer</h1>

            <p>I completed my Bachelors Degree in computer engineering from Kathmandu Engineering 
               College, kalimati, kathmandu. I was a former president at robotics club during my
               undergrad course and have worked as junior embedded systems engineer with speciliazation
               in both hardware and software development
            </p>

            <div className={styles.links}>
                <img src={git_logo}/>
                <img src={linkedin_logo}/>
                <img src={fb_logo}/>
            </div>
        </section>
    );
}

export default Section_about;
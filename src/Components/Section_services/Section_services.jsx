import styles from './Section_services.module.css'
import web from '../../assets/Vector/web.svg' 
import ai from '../../assets/Vector/ai.svg' 
import desktop from '../../assets/Vector/desktop.svg' 
import embedded from '../../assets/Vector/embedded.svg' 
import ui from '../../assets/Vector/ui.svg' 
import metal from '../../assets/Vector/Metal.svg' 

function Section_services(){
    return(
        <section className={styles.section} id="section_services">
            <h1>My Services</h1>

            <div className={styles.services}>
                <article>
                    <img src={web}/>
                    <h2>Web development</h2>
                    <p>Full stack</p>
                </article>

                 <article>
                    <img src={ai}/>
                    <h2>AI/ML</h2>
                    <p>Speech recognition, Computer vision</p>
                </article>

                 <article>
                    <img src={desktop}/>
                    <h2>Desktop Application <br/> development</h2>
                    <p>PyQt, Qt designer</p>
                </article>
                
                <article>
                    <img src={ui}/>
                    <h2>UI/UX Design</h2>
                    <p>Mobile ,Website UI design</p>
                </article>

                 <article>
                    <img src={embedded}/>
                    <h2>Embedded Systems Development</h2>
                    <p>PCB prototyping, circuit design and assembly</p>
                </article>

                 <article>
                    <img src={metal}/>
                    <h2>Metal Fabrication</h2>
                    <p>Metal cutting, drilling, welding and CNC</p>
                </article>

            </div>
        </section>
    );
}

export default Section_services;
import { useState } from "react";
import styles from './Section_form.module.css'
import arrow from '../../assets/Vector/btn_arrow.svg'

function Section_form(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async () => {
        const res = await fetch("http://127.0.0.1:8000/api/contact/send/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
        });

        const data = await res.json();
        alert(data.success || "Error sending message");
    };

    return(
        <section className={styles.section} id="section_form">
            <h1>Contact</h1>
            <div className="form-floating w-100">
                <textarea 
                    className="form-control" 
                    placeholder="Leave a comment here" 
                    id="floatingTextarea2" 
                    style={{
                        height: '60px', 
                        width: '100%',
                        border: '1px solid #697484' 
                        }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                >
                </textarea>
                <label htmlFor="floatingTextarea2">Name</label>
            </div>

            <div className="form-floating w-100">
                <textarea 
                    className="form-control" 
                    placeholder="Leave a comment here" 
                    id="floatingTextarea2" 
                    style={{
                        height: '60px', 
                        width: '100%',
                        border: '1px solid #697484' 
                        }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                >
                </textarea>
                <label htmlFor="floatingTextarea2">Email</label>
            </div>

            <div className="form-floating w-100">
                <textarea 
                    className="form-control" 
                    placeholder="Leave a comment here" 
                    id="floatingTextarea2" 
                    style={{
                        height: '160px', 
                        width: '100%',
                        border: '1px solid #697484' 
                        }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                >
                </textarea>
                <label htmlFor="floatingTextarea2">Message</label>
            </div>

            <button onClick={handleSubmit}>Submit<img src={arrow}/></button>
        </section>
    );
}

export default Section_form;
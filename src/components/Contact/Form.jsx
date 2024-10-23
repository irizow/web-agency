import styles from './contact.module.css';
import emailjs from '@emailjs/browser'

export default function ContactForm({isSubmitted, setIsSubmitted}) {
    const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID
    const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID
    const publicKey = import.meta.env.VITE_REACT_APP_PUBLIC_KEY
   
    const handleOnSubmit = (e)=> {
        e.preventDefault();
        emailjs.sendForm(serviceId, templateId, e.target, publicKey)
        .then((result)=> {
            console.log('Email successfully sent')
        }, (error)=> {
            console.log('something went wrong...')
            console.log('error: ' + error)
        });
        e.target.reset();
        setIsSubmitted(true);
    }
    return (
        <>      
                <span>ready to bring your vision to life?</span>
                <h1 className={styles.formtitle}>work with us</h1>
                <form onSubmit={handleOnSubmit} className={styles.form}>
                    <div>
                    <label htmlFor="name">*Name or Business:</label>
                    <input id="name" name="name" type="text"></input>
                    </div>
                    <div>
                    <label htmlFor="email">*Email:</label>
                    <input id="email" name="email" type="email"></input>
                    </div>
                    <div>
                    <label htmlFor="phone">Phone Number:</label>
                    <input id="phone" name="phone" type="text" placeholder='phone'></input>
                    </div>
                    <div>
                    <label htmlFor="message">*Message:</label>
                    <textarea id="message" name="message" placeholder="Which kind of project should we bring to life?"rows="20" columns="400"></textarea>
                    </div>
                    <button className={styles.submit} type='submit'>let's create</button>
                </form>
        </>
    
    )
}
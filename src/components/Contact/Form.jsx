import styles from './contact.module.css'

export default function ContactForm({isDarkMode}) {
   
    return (
        <>
                <h1 className={styles.formtitle}>MAKE IT HAPPEN</h1>
                <form action="mailto:irisrossell@gmail.com" method="POST" className={styles.form}>
                    <label htmlFor="name"></label>
                    <input id="name" name="name" type="text" placeholder='Name'></input>
                    <label htmlFor="business"></label>
                    <input id="business" name="business" type="text" placeholder='Business Name'></input>
                    <label htmlFor="email"></label>
                    <input id="email" name="email" type="email" placeholder='Email'></input>
                    <label htmlFor="phone"></label>
                    <input id="phone" name="phone" type="text" placeholder='phone'></input>
                    <label htmlFor="message"></label>
                    <textarea id="message" name="message" placeholder="Which kind of project should we bring to life?"rows="20" columns="400"></textarea>
                    <button className={styles.submit} type='submit'>LET'S CREATE</button>
                </form>
        </>
    
    )
}
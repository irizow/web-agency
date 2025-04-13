import styles from './contact.module.css';
import emailjs from '@emailjs/browser'
import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const translations = {
    en: {
        intro: 'ready to bring your vision to reality?',
        title: 'work with us',
        labels: ['*name or business: ', '*email:', '*phone number:', '*message:'],
        placeholder: 'Which kind of project should we bring to life?',
        button: "let's create!"
    },
    sp: {
            intro: '¿listo para dar vida a tu visión?',
            title: 'hablemos!',
            labels: ['*nombre o negocio:', '*correo electrónico:', '*número de teléfono:', '*mensaje:'],
            placeholder: '¿Qué tipo de proyecto deberíamos llevar a cabo?',
            button: 'empecemos a crear!'
    },
    ca:  {
        intro: 'preparat per donar vida a la teva visió?',
        title: 'parlem!',
        labels: ['*nom o negoci:', '*correu electrònic:', '*número de telèfon:', '*missatge:'],
        placeholder: 'Quin tipus de projecte hauríem de fer realitat?',
        button: 'comencem a crear!'
      }

}

export default function ContactForm({isSubmitted, setIsSubmitted}) {
    const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID
    const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID
    const publicKey = import.meta.env.VITE_REACT_APP_PUBLIC_KEY
    const {language} = useContext(LanguageContext);
   
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
        <div className={styles.formdiv}>      
                <span>{translations[language].intro}</span>
                <h1 className={styles.formtitle}>{translations[language].title}</h1>
                <form onSubmit={handleOnSubmit} className={styles.form}>
                    <div>
                    <label htmlFor="name">{translations[language].labels[0]}</label>
                    <input id="name" name="name" type="text"></input>
                    </div>
                    <div>
                    <label htmlFor="email">{translations[language].labels[1]}</label>
                    <input id="email" name="email" type="email"></input>
                    </div>
                    <div>
                    <label htmlFor="phone">{translations[language].labels[2]}</label>
                    <input id="phone" name="phone" type="text"></input>
                    </div>
                    <div>
                    <label htmlFor="message">{translations[language].labels[3]}</label>
                    <textarea id="message" name="message" placeholder={translations[language].placeholder}rows="20" columns="400"></textarea>
                    </div>
                    <button className={styles.submit} type='submit'>{translations[language].button}</button>
                </form>
        </div>
    
    )
}
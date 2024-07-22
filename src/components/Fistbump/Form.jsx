import styles from './Fistbump.module.css'
import envelopeData from '../../utils/animations/envelope.json'
import Lottie from 'react-lottie'
import { motion } from 'framer-motion'

export default function ContactForm({isDarkMode}) {
   
    return (
        <>
                <h1 className={styles.formtitle}>LET'S MAKE MAGIC TOGETHER</h1>
                <form className={styles.form}>
                    <label htmlFor="name"></label>
                    <input id="name" name="name" type="text" placeholder='Name'></input>
                    <label htmlFor="business"></label>
                    <input id="business" name="business" type="text" placeholder='Business'></input>
                    <label htmlFor="email"></label>
                    <input id="email" name="email" type="email" placeholder='Email'></input>
                    <label htmlFor="phone"></label>
                    <input id="phone" name="phone" type="text" placeholder='phone'></input>
                    <label htmlFor="message"></label>
                    <textarea id="message" name="message" placeholder="Tell us what you want :)"rows="20" columns="400"></textarea>
                </form>
        </>
    
    )
}
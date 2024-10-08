import { HashLink } from 'react-router-hash-link'
import styles from './services.module.css'

export default function ServiceCard({ title, description, features, price, isDarkMode}) {
    const colors = isDarkMode ? ['black', 'white'] : ['white', 'black']
    return (
        <div className={styles.servicecard}>
            <div className={styles.titlediv}>
            <h3 style={{color: colors[1]}}>{title}</h3>
            </div>
            <div className={styles.descriptiondiv}>
            <p style={{color: colors[1]}} >{description}</p>
            <ul>
            {features.map((feature, index) => 
                <li style={{color: colors[1]}} key={index}>{feature}</li>)}
            </ul>
            <span className={styles.price} style={{color: colors[1]}}>{price}</span>
            <HashLink smooth to='#contact'>
            <button style={{color: colors[1]}} >CONTACT US</button>
            </HashLink>
            </div>
        </div>
    )
}
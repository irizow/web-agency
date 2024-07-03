import styles from './hero.module.css'
import parrotLogoDM from '../../assets/images/parrotcircularDM.png'
import parrotLogoLM from '../../assets/images/parrotcircularLM.png'

export default function Hero({isDarkMode}) {
    console.log(isDarkMode)
    return (
        <div className={isDarkMode ? `${styles.herobox} ${styles.dark}` : `${styles.herobox} ${styles.light}`}>
            <div className={styles.herotext}>
            <p> We design and build websites from scratch. Cause a business that stands out deserves more than a template.
            </p>
            </div>
        </div>
    )
}
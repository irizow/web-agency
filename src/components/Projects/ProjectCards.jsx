import styles from './projects.module.css'
import { motion } from 'framer-motion'
export default function ProjectCards({url, title, description, img, alt}) {
    return (
        <a className={styles.projectlinks} href={url} target='_blank' rel='noopener noreferrer'>
        <div className={styles.projectcard}>
            
            <img loading="lazy" src={img} className={styles.projectimg} alt={alt}></img>
      
            <div className={styles.projecttitle}>
            <span>{title}</span>
            </div>
            <span className={styles.projectdescription}>{description}</span>
        </div>
        </a>
    )
}
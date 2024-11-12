import styles from './projects.module.css'
import { motion } from 'framer-motion'
export default function ProjectCards({url, title, description, img, alt, id}) {
    return (
        <div className={styles.projectcards}>
            <div>
                <img src={img} className={styles.projectpicture} alt={alt}></img>
                <div>
                    <h3>{id}</h3> 
                    <h3>{title}</h3>
                </div>
                </div>
         
        </div>
    )
}
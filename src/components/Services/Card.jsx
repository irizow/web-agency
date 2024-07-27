import styles from './services.module.css'
import { motion } from 'framer-motion'

export default function Card({title}) {
    return (
        <motion.div className={styles.card}
        whileHover={{ scale: 1.1,
            transition: { duration: 1 }}}>
            <span className={styles.cardtitle}>{title}</span>
        </motion.div>
    )

}
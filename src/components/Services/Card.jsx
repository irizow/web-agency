import styles from './services.module.css'

export default function Card({title, description}) {
    return (
        <div className={styles.card}>
            <span className={styles.cardtitle}>{title}</span>
            <span className={styles.carddescription}>{description}</span>
        </div>
    )

}
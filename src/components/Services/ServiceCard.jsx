import styles from './services.module.css'

export default function ServiceCard({ title, description, features, price}) {
    return (
        <div className={styles.servicecard}>
            <div className={styles.titlediv}>
            <h3>{title}</h3>
            </div>
            <div className={styles.descriptiondiv}>
            <p>{description}</p>
            <ul>
            {features.map((feature, index) => 
                <li key={index}>{feature}</li>)}
            </ul>
            <p className={styles.price}>{price}</p>
            <button>CONTACT US</button>
            </div>
        </div>
    )
}
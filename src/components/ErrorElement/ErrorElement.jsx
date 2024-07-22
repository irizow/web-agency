import styles from './errorelement.module.css'
import { Link } from 'react-router-dom'

export function ErrorElement() {


    return (
        <div className={styles.errordiv}>
            <h1>Oh... It looks like the page your looking for doesn't exist</h1>
            <h3>But we can create it for you!</h3>
            <Link to='/'>Visit us</Link>
        </div>

    )
}
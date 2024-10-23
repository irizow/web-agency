import styles from './hero.module.css'
import creativeSvg from '../../assets/images/Hero/creativesvg.svg'
import glitterGif from '../../assets/images/Hero/glitter.gif'
import scrollSvg from '../../assets/images/Hero/scroll.svg'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroprincipal}>
                <div className={styles.herotitle}>
                    <h1>a
                    <img src={creativeSvg} alt='a gradient word saying creative'></img>
                    web agency</h1>
                    <h2>for small businesses</h2>
                </div>
                <div className={styles.availability}>
                    <img src={glitterGif} alt='gif of a glitter star'></img>
                    <span>available for work</span>
                </div>
            </div>
            <div className={styles.herofooter}>
                <p>we help small businesses 
                    and start-ups stand out 
                    with <em>unique websites</em> that
                    reflect their identity.
                </p>
                <p>
                    our aim is to create lasting 
                    digital experiences that make 
                    a <em>real impact</em>, all while keeping our 
                    services <em>affordable</em> without compromising on quality.   
                </p>
                <div>
                    <span>learn more</span>
                    <HashLink smooth to='#about'>
                    <img className={styles.scrollbutton} src={scrollSvg} alt='scroll button'></img>
                    </HashLink>
                </div>
            </div>
        </section>
    )
}
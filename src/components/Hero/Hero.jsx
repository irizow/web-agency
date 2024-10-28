import styles from './hero.module.css'
import creativeSvg from '../../assets/images/Hero/creativesvg.svg'
import glitterGif from '../../assets/images/Hero/glitter.gif'
import scrollSvg from '../../assets/images/Hero/scroll.svg'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'
import { easeInOut, motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroprincipal}>
                <div className={styles.herotitle}>
                    <motion.h1
                    initial={{opacity: 0, y: '-100px'}}
                    animate={{opacity: 1, y: '0'}}
                    transition={{duration: 1}}>a
                    <span
                    >creative</span>
                    web agency</motion.h1>
                    <motion.h2
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 1, duration: 1}}>for small businesses</motion.h2>
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
import styles from './hero.module.css'
import creativeSvg from '../../assets/images/Hero/creativesvg.svg'
import glitterGif from '../../assets/images/Hero/glitter.gif'
import scrollSvg from '../../assets/images/Hero/scroll.svg'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'
import { easeInOut, motion } from 'framer-motion';
import { useState, useEffect } from 'react'

export default function Hero() {
    
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);
    return (
        <section className={styles.hero} id='hero'>
            <div className={styles.heroprincipal}>
                <div className={styles.herotitle}>
                    <motion.h1
                    initial={{opacity: 0, y: '-100px'}}
                    animate={{opacity: 1, y: '0'}}
                    transition={{duration: 1}}>a
                    <em
                    >creative</em>
                    web agency</motion.h1>
                    <motion.h2
                    initial={{opacity: 0, x: matches ? -100 : -100}}
                    animate={{opacity: 1, x: matches ? 0 : 0}}
                    transition={{delay: 1, duration: 1}}>for small businesses</motion.h2>
                </div>
                    <div className={styles.availability}>
                    <HashLink smooth to='#contact'>
                        <img src={glitterGif} alt='gif of a glitter star'></img>
                        <span>contact us now</span>
                        </HashLink>
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
                    <HashLink smooth to='#services'>
                    <img className={styles.scrollbutton} src={scrollSvg} alt='scroll button'></img>
                    </HashLink>
                </div>
            </div>
        </section>
    )
}
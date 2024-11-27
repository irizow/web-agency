import styles from './hero.module.css'
import meshVid from '../../assets/images/Hero/mesh3.mp4';
import glitterGif from '../../assets/images/Hero/glitter.gif'
import scrollSvg from '../../assets/images/Hero/scroll.svg'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'
import { useState, useEffect, useRef } from 'react'

export default function Hero() {

    const arrowRefs = {
        center: useRef(null),
        down: useRef(null),
        up: useRef(null),
        right: useRef(null),
        left: useRef(null),
    }
    

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);
    return (
        <section className={styles.hero} id='home'>
            <div className={styles.heroprincipal}>
                <h2>BUILT BY</h2>
                <h1>LIME</h1>
                
                <div className={styles.meshcontainer}>
                    
                </div>
                
                    
                    
                    <div className={styles.availability}>
                    <HashLink smooth to='#contact'>
                        <img src={glitterGif} alt='gif of a glitter star'></img>
                        <span>contact us now</span>
                        </HashLink>
                    </div>
            
            </div>
          
        </section>
    )
}
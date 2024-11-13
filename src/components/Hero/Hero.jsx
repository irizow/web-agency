import styles from './hero.module.css'
import meshGif from '../../assets/images/Hero/mesh.gif';
import glitterGif from '../../assets/images/Hero/glitter.gif'
import scrollSvg from '../../assets/images/Hero/scroll.svg'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'
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
                <h1>&lt;a creative agency</h1>
                <h1>for small businesses/&gt;</h1>
                    <div className={styles.meshcontainer}/>
                    <div/>
                    <nav>
                        <HashLink smooth to='#about'>&lt;about/&gt;</HashLink>
                        <HashLink smooth to='#projects'>&lt;work/&gt;</HashLink>
                        <HashLink smooth to='#services'>&lt;services/&gt;</HashLink>
                        <HashLink>&lt;faq/&gt;</HashLink>
                        <HashLink smooth to='#contact'>&lt;hire us/&gt;</HashLink>
                    </nav>
                    
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
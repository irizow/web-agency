import styles from './header.module.css'
import { motion, useScroll } from 'framer-motion'
import closeButton from '../../assets/images/closebutton.png'
import { useState, useEffect } from 'react'
import HamburgerIcon from '../../assets/images/hamburgermenu.png'
import limeLogo from '../../assets/images/limelogo.png'
import { HashLink } from 'react-router-hash-link'

export default function Header({isDarkMode, setIsDarkMode, scrollRef, setShowForm, isHeroVisible}) {
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const {scrollYProgress} = useScroll({ container: scrollRef })

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);


    function MenuItems() {
        return (
            <div className={styles.menu}>
            
            <HashLink to='#hero' className={styles.logodiv}>
            <motion.img 
            initial={{y: -200}}
            animate={{y: 0}}
            transition={{delay: 1.5, duration: 1, ease: 'easeInOut', type: 'spring',
                stiffness: 100,
                damping: 10,}}
            
            className={styles.limelogo} src={limeLogo} alt='built by lime logo'></motion.img>
                <svg id={styles.progress} viewBox="0 0 100 100">
                    
                <motion.circle
                cx="50"
                cy="50"
                r="35px"
                pathLength="1"
                className={styles.circlescroll}
                style={{ pathLength: scrollYProgress }}
                />
                </svg>
               
            </HashLink>
            </div>
        )
    }

    return (
        <>
        <section className={styles.header}>
          
        <HashLink smooth to='#home'><em>[</em>home<em>]</em></HashLink>
          <HashLink smooth to='#about'><em>[</em>about<em>]</em></HashLink>
          <HashLink smooth to='#projects'><em>[</em>work<em>]</em></HashLink>
          <HashLink smooth to='#services'><em>[</em>services<em>]</em></HashLink>
          <HashLink><em>[</em>faq<em>]</em></HashLink>
          <HashLink smooth to='#contact'><em>[</em>hire us<em>]</em></HashLink>


                
            <div className={styles.menubox}>
                <div>
                <img className={styles.hamburgericon} src={HamburgerIcon} onClick={()=>setIsMobileMenu(!isMobileMenu)} alt="hamburger menu icon"></img>
                </div>
            </div>
        </section>
        {isMobileMenu &&
            <div className={styles.mobilemenu}>
                <img className={styles.closebutton} src={closeButton} onClick={()=>{setIsMobileMenu(false)}}></img>
                <MenuItems />
            </div>}
        </>
    )
}
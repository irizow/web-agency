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
                
                    <MenuItems />
                
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
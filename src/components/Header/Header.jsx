import styles from './header.module.css'
import { motion, useScroll } from 'framer-motion'
import closeButton from '../../assets/images/closebutton.png'
import { useState, useEffect } from 'react'
import HamburgerIcon from '../../assets/images/hamburgermenu.png'
import limeLogo from '../../assets/images/limelogo.png'
import { MoonIcon } from '../../assets/icons/icons'
import { SunIcon } from '../../assets/icons/icons'
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

        const backdropFilter = isHeroVisible ? 'none' : matches ? 'blur(10px)' : 'none'

    function MenuItems() {
        return (
            <div className={styles.menu}>
            <div>
            <HashLink smooth to='#about' className={styles.linklight} onClick={()=>{setIsMobileMenu(false)}}>about</HashLink>
            <HashLink smooth to='#projects' className={styles.linklight} onClick={()=>{setIsMobileMenu(false)}}>work</HashLink>
            <HashLink smooth to='#services' className={styles.linklight} onClick={()=>{setIsMobileMenu(false)}}>services</HashLink>
            </div>
            <HashLink to='#hero' className={styles.logodiv}>
            <img className={styles.limelogo} src={limeLogo} alt='built by lime logo'></img>
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
            <HashLink to='#contact' className={styles.contactlink} onClick={()=>{setIsMobileMenu(false); setShowForm(true)}}>hire us</HashLink>
            </div>
        )
    }

    return (
        <>
        <section className={styles.header} style={{ backdropFilter}}>
                
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
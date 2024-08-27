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
    const background = isHeroVisible ? 'none' : isDarkMode ? ' rgba(0, 0, 0, 0.429)' : ' rgba(255, 255, 255, 0.242)' ;

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);

        const backdropFilter = isHeroVisible ? 'none' : matches ? 'blur(10px)' : 'none;'

    function MenuItems() {
        return (
            <>
            <HashLink smooth to='#about' className={isMobileMenu ? styles.linkdark : isDarkMode ? styles.linkdark : styles.linklight} onClick={()=>{setIsMobileMenu(false)}}>ABOUT</HashLink>
            <HashLink smooth to='#services' className={ isMobileMenu ? styles.linkdark : isDarkMode ? styles.linkdark : styles.linklight} onClick={()=>{setIsMobileMenu(false)}}>SERVICES</HashLink>
            <HashLink smooth to='#projects' className={isMobileMenu ? styles.linkdark : isDarkMode ? styles.linkdark : styles.linklight} onClick={()=>{setIsMobileMenu(false)}}>PROJECTS</HashLink>
            <HashLink to='#contact' className={ isDarkMode ? `${styles.contactdark} ${styles.contactlink}` : `${styles.contactlight} ${styles.contactlink}`} onClick={()=>{setIsMobileMenu(false); setShowForm(true)}}>CONTACT</HashLink>
            </>
        )
    }

    return (
        <>
        <section className={styles.header} style={{background, backdropFilter}}>
            <div className={styles.logobox}>
            </div>
                <div className={styles.menu}>
                    <MenuItems style={''}/>
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
            
            <div className={styles.menubox}>
                <div>
                <div onClick={()=> {setIsDarkMode(!isDarkMode)}} >
                {isDarkMode ? <SunIcon/> : <MoonIcon/>}
                </div>
                <img className={styles.hamburgericon} src={HamburgerIcon} onClick={()=>setIsMobileMenu(!isMobileMenu)} style={isDarkMode ? {filter: 'invert(100%)'} : {filter: 'none'}} alt="hamburger menu icon"></img>
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
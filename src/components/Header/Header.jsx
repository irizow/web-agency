import styles from './header.module.css'
import { motion, useScroll } from 'framer-motion'
import closeButton from '../../assets/images/closebutton.png'
import parrotLogo from '../../assets/images/newparrotlogo.png'
import HamburgerIcon from '../../assets/images/hamburgermenu.png'
import { MoonIcon } from '../../assets/icons/icons'
import { SunIcon } from '../../assets/icons/icons'
import { HashLink } from 'react-router-hash-link'
import { useState } from 'react'

export default function Header({isDarkMode, setIsDarkMode, scrollRef, setShowForm}) {
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const {scrollYProgress} = useScroll({ container: scrollRef })


    function MenuItems() {
        return (
            <>
            <HashLink to='#about' className={ isDarkMode ? styles.linkdark : styles.linklight} onClick={()=>{setIsMobileMenu(false)}}>About</HashLink>
            <HashLink to='#services' className={ isDarkMode ? styles.linkdark : styles.linklight} onClick={()=>{setIsMobileMenu(false)}}>Services</HashLink>
            <HashLink to='#projects' className={ isDarkMode ? styles.linkdark : styles.linklight} onClick={()=>{setIsMobileMenu(false)}}>Our Projects</HashLink>
            <HashLink to='#contact' className={ isDarkMode ? `${styles.contactdark} ${styles.contactlink}` : `${styles.contactlight} ${styles.contactlink}`} onClick={()=>{setIsMobileMenu(false); setShowForm(true)}}>Contact</HashLink>
            </>
        )
    }

    return (
        <>
        <section className={styles.header}>
            <div className={styles.logobox}>
            </div>
                <div className={styles.menu}>
                    <MenuItems style={''}/>
                </div>
    
            <HashLink to='#hero' className={styles.logodiv}>
            <img className={styles.title} src={parrotLogo}></img>
                <svg id={styles.progress} viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="35" pathLength="1" className={styles.circleoverlay} />
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
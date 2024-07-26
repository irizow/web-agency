import styles from './header.module.css'
import parrotLogoDM from '../../assets/images/parrotcircularDM.png'
import parrotLogoLM from '../../assets/images/parrotcircularLM.png'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import parrotLogo from '../../assets/images/newparrotlogo.png'
import HamburgerIcon from '../../assets/images/hamburgermenu.png'
import { MoonIcon } from '../../assets/icons/icons'
import { SunIcon } from '../../assets/icons/icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header({isDarkMode, setIsDarkMode, scrollRef}) {
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const {scrollYProgress} = useScroll({ container: scrollRef })


    function MenuItems() {
        return (
            <>
            <Link to='/About' className={ isDarkMode ? styles.linkdark : styles.linklight}>About</Link>
            <Link to='/services' className={ isDarkMode ? styles.linkdark : styles.linklight}>Services</Link>
            <Link to='/' className={ isDarkMode ? styles.linkdark : styles.linklight}>Our Projects</Link>
            <Link to='/' className={ isDarkMode ? `${styles.contactdark} ${styles.contactlink}` : `${styles.contactlight} ${styles.contactlink}`}>Contact</Link>
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
    
            <Link to='/home'>
                <svg id={styles.progress} width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" pathLength="1" className={styles.circleoverlay} />
                <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className={styles.circlescroll}
                style={{ pathLength: scrollYProgress }}
                />
                </svg>
                <img className={styles.title} src={parrotLogo} ></img>
               
            </Link>
            
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
                {console.log('ismobile??' + isMobileMenu)}
                <MenuItems/>
            </div>}
        </>
    )
}
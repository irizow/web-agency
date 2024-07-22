import styles from './header.module.css'
import parrotLogoDM from '../../assets/images/parrotcircularDM.png'
import parrotLogoLM from '../../assets/images/parrotcircularLM.png'
import HamburgerIcon from '../../assets/images/hamburgermenu.png'
import { MoonIcon } from '../../assets/icons/icons'
import { SunIcon } from '../../assets/icons/icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header({isDarkMode, setIsDarkMode}) {

    const [isMobileMenu, setIsMobileMenu] = useState(false);



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
            <img className={styles.title} src={isDarkMode ? parrotLogoDM : parrotLogoLM} ></img>
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
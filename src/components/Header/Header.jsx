import styles from './header.module.css'
import { motion, useScroll } from 'framer-motion'
import closeButton from '../../assets/images/closebutton.png'
import { useState, useEffect } from 'react'
import HamburgerIcon from '../../assets/images/hamburgermenu.png'
import limeLogo from '../../assets/images/limelogo.png'
import { HashLink } from 'react-router-hash-link'
import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'

const navLinks = {
    'ca' : ['home', 'nosaltres', 'projectes', 'serveis', 'contacta'],
    'sp' : ['home', 'nosotros', 'proyectos', 'servicios', 'contacto'],
    'en' : ['home', 'about', 'work', 'services', 'hire us']
}

export default function Header({scrollRef}) {
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const {language, setLanguage} = useContext(LanguageContext);

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);

    return (
        <>
        <div className={styles.languages}>
            <span className={language === 'ca' ? styles.active : ''} onClick={()=> setLanguage('ca')}>CA</span>
            <span className={language === 'sp' ? styles.active : ''} onClick={()=> setLanguage('sp')}>SP</span>
            <span className={language === 'en' ? styles.active : ''} onClick={()=> setLanguage('en')}>EN</span>
        </div>
        <section className={styles.header}>
          
        <HashLink smooth to='#home'><em>[</em>{navLinks[language][0]}<em>]</em></HashLink>
          <HashLink smooth to='#about'><em>[</em>{navLinks[language][1]}<em>]</em></HashLink>
          <HashLink smooth to='#projects'><em>[</em>{navLinks[language][2]}<em>]</em></HashLink>
          <HashLink smooth to='#services'><em>[</em>{navLinks[language][3]}<em>]</em></HashLink>
          <HashLink smooth to='#contact'><em>[</em>{navLinks[language][4]}<em>]</em></HashLink>


                
            <div className={styles.menubox}>
                <div>
                <img className={styles.hamburgericon} src={HamburgerIcon} onClick={()=>setIsMobileMenu(!isMobileMenu)} alt="hamburger menu icon"></img>
                </div>
            </div>
        </section>
        {isMobileMenu &&
            <div className={styles.mobilemenu}>
                <img className={styles.closebutton} src={closeButton} onClick={()=>{setIsMobileMenu(false)}}></img>
                <HashLink onClick={() => {setIsMobileMenu(false)}} smooth to='#home'><em>[</em>{navLinks[language][0]}<em>]</em></HashLink>
                <HashLink onClick={() => {setIsMobileMenu(false)}} smooth to='#about'><em>[</em>{navLinks[language][1]}<em>]</em></HashLink>
                <HashLink onClick={() => {setIsMobileMenu(false)}} smooth to='#projects'><em>[</em>{navLinks[language][2]}<em>]</em></HashLink>
                <HashLink onClick={() => {setIsMobileMenu(false)}} smooth to='#services'><em>[</em>{navLinks[language][3]}<em>]</em></HashLink>
                <HashLink onClick={() => {setIsMobileMenu(false)}} smooth to='#contact'><em>[</em>{navLinks[language][4]}<em>]</em></HashLink>
            </div>}
        </>
    )
}
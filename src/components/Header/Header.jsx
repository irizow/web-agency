import styles from './header.module.css'
import closeButton from '../../assets/images/closebutton.png'
import { useState } from 'react'
import HamburgerIcon from '../../assets/images/hamburgermenu.png'
import { HashLink } from 'react-router-hash-link'
import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import { useEffect } from 'react'

const navLinks = {
    'ca' : ['home', 'nosaltres', 'projectes', 'serveis', 'preus', 'contacta'],
    'sp' : ['home', 'nosotros', 'proyectos', 'servicios',  'precios', 'contacto'],
    'en' : ['home', 'about', 'work', 'services',  'price', 'hire us']
}

export default function Header({scrollRef}) {
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const {language, setLanguage} = useContext(LanguageContext);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sectionIds = ['home', 'about', 'projects', 'services', 'prices', 'contact'];
      
        const observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
              }
            });
          },
          {
            threshold: 0.5,
          }
        );
      
        sectionIds.forEach(id => {
          const el = document.getElementById(id);
          if (el) observer.observe(el);
        });
      
        return () => {
          sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.unobserve(el);
          });
        };
      }, []);
    


    return (
        <>
        <div className={styles.languages}>
            <span className={language === 'ca' ? styles.active : ''} onClick={()=> setLanguage('ca')}>CA</span>
            <span className={language === 'sp' ? styles.active : ''} onClick={()=> setLanguage('sp')}>SP</span>
            <span className={language === 'en' ? styles.active : ''} onClick={()=> setLanguage('en')}>EN</span>
        </div>
        <section className={styles.header}>
          
        <HashLink className={activeSection === 'home' ? styles.active : ''} smooth to='#home'><em>[</em>{navLinks[language][0]}<em>]</em></HashLink>
          <HashLink className={activeSection === 'about' ? styles.active : ''} smooth to='#about'><em>[</em>{navLinks[language][1]}<em>]</em></HashLink>
          <HashLink className={activeSection === 'services' ? styles.active : ''} smooth to='#services'><em>[</em>{navLinks[language][3]}<em>]</em></HashLink>
          <HashLink className={activeSection === 'projects' ? styles.active : ''} smooth to='#projects'><em>[</em>{navLinks[language][2]}<em>]</em></HashLink>
          <HashLink className={activeSection === 'prices' ? styles.active : ''} smooth to='#prices'><em>[</em>{navLinks[language][4]}<em>]</em></HashLink>
          <HashLink className={activeSection === 'contact' ? styles.active : ''} smooth to='#contact'><em>[</em>{navLinks[language][5]}<em>]</em></HashLink>


                
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
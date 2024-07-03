import styles from './header.module.css'
import parrotLogoDM from '../../assets/images/parrotcircularDM.png'
import parrotLogoLM from '../../assets/images/parrotcircularLM.png'
import { HamburgerIcon } from '../../assets/icons/icons'
import parrotText from '../../assets/images/PARROTWEBSTEXT2W.png'
import { MoonIcon } from '../../assets/icons/icons'
import { SunIcon } from '../../assets/icons/icons'

export default function Header({isDarkMode, setIsDarkMode}) {
    return (
        <section className={styles.header}>
            <div className={styles.logobox}>
            </div>
            <img className={styles.title} src={isDarkMode ? parrotLogoDM : parrotLogoLM} ></img>
            <div className={styles.menubox}>
                <div className={isDarkMode ? `${styles.darkicon}` : null} onClick={()=> {setIsDarkMode(!isDarkMode)}} >
                {isDarkMode ? <SunIcon/> : <MoonIcon/>}
                <HamburgerIcon/>
                </div>
            </div>
        </section>
    )
}
import styles from './hero2.module.css'
import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'

const heroText = {
    'ca' : 'LA TEVA MARCA, AL SEGÜENT NIVELL',
    'sp' : 'TU MARCA, AL SIGUIENTE NIVEL',
    'en' : 'YOUR BRAND, LEVELED UP',
}
const servicesText = {
    'ca' : ['BRANDING','DISSENY WEB', 'DESENVOLUPAMENT WEB', 'SOCIAL MEDIA MANAGEMENT'],
    'sp' : ['BRANDING','DISEÑO WEB', 'DESARROLLO WEB', 'SOCIAL MEDIA MANAGEMENT'],
    'en' : ['BRANDING','WEB DESIGN', 'WEB DEVELOPMENT', 'SOCIAL MEDIA MANAGEMENT'],
}

export default function Hero2() {
    const {language} = useContext(LanguageContext)
 
    return (
        <section className={styles.herodesktop} id='home'>
            <div className={styles.titlecontainer}>
                <div className={styles.marblecontainer}></div>
                
                <h2>BUILT BY</h2>
                <div className={styles.meshcontainer}></div>
                <div className={styles.limecontainer}>
                    <h1>LIME</h1>
                    <div className={styles.sakuracontainer}></div>
                </div>
                
                <h3>&lt;{heroText[language]}/&gt;</h3>
            </div>
            <div className={styles.heroservices}>
                <span>{servicesText[language][0]}</span>
                <span>·</span>
                <span>{servicesText[language][1]}</span>
                <span>·</span>
                <span>{servicesText[language][2]}</span>
                <span>·</span>
                <span>{servicesText[language][3]}</span>
            </div>
          
        </section>
    )
}
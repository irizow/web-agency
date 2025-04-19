import styles from './projects.module.css'
import crystalImg from '../../assets/images/Projects/Crystals.svg'
import ProjectCards from './ProjectCards'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import jrtPicture from '../../assets/images/Projects/jrtmotors.webp';
import urbanPicture from '../../assets/images/Projects/urbancare2.webp';
import kuboPicture from '../../assets/images/Projects/kubotravel.webp';
import caffeMattie from '../../assets/images/Projects/cafe-mattie.webp';
import TitleScroll from '../TitleScroll/TitleScroll'
import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'



export default function Projects() {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
      )
    const {language} = useContext(LanguageContext)
    
      useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);
    const [ref, inView] = useInView({threshold: 0.6});

    const projects = [{
        title: 'Kubo Travel',
        img: kuboPicture,
        alt: 'Landing page made for kubo travel agency',
        id: '01',
    },
    {
        title: 'JRT Motors',
        img: jrtPicture,
        alt: 'Landing page made for JRT Motors, a private car dealership',
        id: '02',
    },
    {
        title: 'Urban Care Transport',
        img: urbanPicture,
        alt: 'Landing page made for Urban Care Transport, a Non emergency transportation service',
        id: '03',
    },
    {
        title: 'Café Mattie',
        img: caffeMattie,
        alt: 'Landing page made for Café Mattie, a local café catering creative people',
        id: '04'
    },
]

const translations = {
    en: {
        title: 'WORK',
        intro: 'a few projects we’ve loved working on and there’s more to come!',
        focusSection: [
            <p key="1">quality over quantity</p>,
            <p key="2">
              to keep things focused, <em>we only take on 2 projects a month</em>. This way, we can pour all our energy into delivering the quality and attention your project deserves!
            </p>
          ]
    },
    sp: {
        title: 'PROYECTOS',
        intro: 'Algunos proyectos en los que nos ha encantado trabajar, y hay más que vendrán!',
        focusSection: [
            <p key="1">calidad sobre cantidad</p>,
            <p key="2">
              para mantener el enfoque, <em>solo tomamos 2 proyectos al mes</em>. Así podemos dedicar toda nuestra energía a ofrecer la calidad y atención que tu proyecto merece.
            </p>
          ]
    },
    ca: {
        title: 'PROJECTES',
        intro: 'Alguns projectes en els que ens ha encantat treballar, i en vindràn més!',
        focusSection: [
            <p key="1">qualitat sobre quantitat</p>,
            <p key="2">
              per mantenir el focus, <em>només acceptem 2 projectes al mes</em>. Així podem posar tota la nostra energia en oferir la qualitat i l’atenció que el teu projecte es mereix!
            </p>
          ]
    }
}



    return (
        <section id='projects' className={styles.projects}> 
            <TitleScroll name={translations[language].title}></TitleScroll>
            <motion.div 
            ref={ref}
            className={styles.projectsdiv}
            transition={{duration: 0.8}}>
                <div className={styles.gridleft}>
                    <p>{translations[language].intro}</p>
                </div>
                <div className={styles.gridleftbottom}>
                    <div>
                {translations[language].focusSection.map((line) => line)}
                </div>
                        <img src={crystalImg} alt='icon of purple crystals'></img>
                    </div>
                <div className={styles.gridright}>
                    <motion.div 
                    initial={!matches ? {marginLeft: '-100vw', marginBottom: 0, opacity: 0} : {}}
                    animate={inView && {marginLeft: '0', marginBottom: 0, opacity: 1}}
                    transition={{duration: 2}}
                    className={styles.projectswrapper}>
                        <p>scroll down</p>
                        {projects.map((project, index) => 
                        <ProjectCards key={index} img={project.img} title={project.title} id={project.id} />
                        )}
                    </motion.div>

                </div>
            </motion.div>
        </section>
    )
}
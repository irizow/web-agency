import styles from './projects.module.css'
import crystalImg from '../../assets/images/Projects/Crystals.svg'
import ProjectCards from './ProjectCards'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import jrtPicture from '../../assets/images/Projects/jrtmotors.webp';
import urbanPicture from '../../assets/images/Projects/urbancare.webp';
import kuboPicture from '../../assets/images/Projects/kubotravel.webp';


export default function Projects() {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);
    const [ref, inView] = useInView({threshold: 0.4, triggerOnce: true});

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
        title: 'Kubo Travel',
        id: '04'
    },
]



    return (
        <section id='projects' className={styles.projects}> 
            <motion.div 
            initial={{opacity: 0}}
            animate={inView ? {opacity: 1} : {}}
            ref={ref} className={styles.projectsdiv}
            transition={{duration: 0.5}}>
                <div className={styles.gridleft}>
                    <h2>work</h2>
                    <p>a few projects we’ve loved working on 
                    and there’s more to come!</p>
                </div>
                <div className={styles.gridleftbottom}>
                        <div>
                            <p>quality over quantity</p>
                            <p>to keep things focused, <em>we only take on 2 projects a month</em>. This way, we can pour all our energy into delivering the quality and attention your project deserves!</p>
                        </div>
                        <img src={crystalImg} alt='icon of purple crystals'></img>
                    </div>
                <div className={styles.gridright}>
                    <motion.div 
                    initial={!matches ? {marginLeft: '-100vw', marginBottom: '0'} : {marginLeft: '0', marginBottom: '50vh'}}
                    animate={inView && {marginLeft: '0', marginBottom: '0'}}
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
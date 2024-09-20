import styles from './projects.module.css'
import ProjectCards from './ProjectCards'
import jrtImg from '../../assets/images/projectimgs/jrtimg.png'
import urbanImg from '../../assets/images/projectimgs/urbanimg.png'
import projectsHero from '../../assets/images/projectimgs/projectshero.webp'
import { motion } from 'framer-motion'

export default function Projects() {
    return (
        <section id='projects' className={styles.projects}>
            <div className={styles.projectstitle}>
            <div>
            <motion.h1>OUR PROJECTS</motion.h1>
            <motion.span>We create every website from scratch. This way we ensure that all our clients have full custom designs tailored to their needs.</motion.span>
            </div>
            <motion.img src={projectsHero} alt='desktop and smartphone with a website designed by built by lime'></motion.img>
            </div>
            <div className={styles.projectscontainer}>
                <ProjectCards url='https://www.jrtmotors.com' img={jrtImg} alt='image of screenshots of jrt motors website' title="JRT MOTORS"></ProjectCards>
                <ProjectCards url='https://www.urbancaretransportation.com' alt='image of screenshots of urban care transportation website' img={urbanImg} title="URBAN CARE TRANSPORT"></ProjectCards>
               
            </div>
        </section>
    )
}
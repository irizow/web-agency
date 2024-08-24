import styles from './projects.module.css'
import ProjectCards from './ProjectCards'
import jrtImg from '../../assets/images/projectimgs/jrtimg.png'
import urbanImg from '../../assets/images/projectimgs/urbanimg.png'

export default function Projects() {
    return (
        <section id='projects' className={styles.projects}>
            <h1>PROJECTS</h1>
            <div className={styles.projectscontainer}>
                <ProjectCards url='https://www.jrtmotors.com' img={jrtImg} title="JRT MOTORS"></ProjectCards>
                <ProjectCards url='https://www.urbancaretransportation.com' img={urbanImg} title="URBAN CARE TRANSPORT"></ProjectCards>
               
            </div>
        </section>
    )
}
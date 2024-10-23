import styles from './projects.module.css'
import crystalImg from '../../assets/images/Projects/Crystals.svg'
import ProjectCards from './ProjectCards'


export default function Projects() {

    const projects = [{
        title: 'Kubo Travel',
    },
    {
        title: 'Kubo Travel',
    },
    {
        title: 'Kubo Travel',
    },
    {
        title: 'Kubo Travel',
    },
]



    return (
        <section id='projects' className={styles.projects}> 
            <div className={styles.projectsdiv}>
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
                    <div className={styles.projectswrapper}>
                        <p>scroll down</p>
                        {projects.map((project, index) => 
                        <ProjectCards key={index} />
                        )}
                    </div>

                </div>
            </div>
        </section>
    )
}
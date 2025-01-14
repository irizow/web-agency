import styles from './about.module.css'
import irisAvatar from '../../assets/images/About/irisavatar.webp';
import dyanAvatar from '../../assets/images/About/dyanavatar.webp'
import greenArrow from '../../assets/images/About/greenarrow.svg'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useMediaQuery from '../../utils/useMediaQueries';
import TitleScroll from '../TitleScroll/TitleScroll';

export default function About() {
    const isSmall = useMediaQuery('(max-width: 768px)');
    const [ref, inView] = useInView({threshold: isSmall ? 0.1 : 0.4, triggerOnce: true});
    const [cardRef, cardInView] = useInView({threshold: 0.5});

    const paragraphsP = [`--two creative minds who love helping small businesses stand out online. 
                        We create websites that are uniquely yours—affordable, impactful, and built
                         to grow with your business.`,
                        `When we’re not building websites, we’re traveling, geeking out over tech and music, 
                        or planning our next big adventure.`,
                        ]
    
                    
    const concepts = [
        {
            title: 'DISCOVER & DEFINE',
            description: `We start with a friendly chat to understand your needs and ideas.
             We’ll discuss your goals, inspiration, and how your website can best represent
              your business.`
        },
        {
            title: 'DESIGN & BUILD',
            description: `With your input, we’ll create a custom design that reflects your brand’s 
            personality. We will update throughout so you can provide feedback. Once approved, 
            we’ll bring it to life. `
        },
        {
            title: 'LAUNCH & SUPPORT',
            description: `Once your site is live, we are here to help with updates, tweaks or ongoing
             support, growing with your business as needed. `
        }
    ]

    function AvatarCard({img, name, description, position}) {
        return (
            <figure className={styles.avatarcard}>
                {position === 'right' &&
                <img src={img} alt={`${name}'s avatar`}></img>}
                <figcaption>
                <h1>{name}</h1>
                <ul>
                    {description.map((item, index) =>
                        <li key={index}>{item}</li>
                    )}
                </ul>
                </figcaption>
                {position === 'left' &&
                <img src={img} alt={`${name}'s avatar`}></img>}

            </figure>
        )
    }
     

    return (
        <section id='about' className={styles.about}>
            <TitleScroll  name={'ABOUT'}></TitleScroll>
            <motion.div 
            ref={ref}
            animate={inView ? {opacity: 1} : {opacity: 0}}
            transition={{duration: 0.4}}
            className={styles.separator}>
                <div className={styles.description}>
                    <AvatarCard img={irisAvatar} name={'iris'} description={['web developer', 'marketing guru']} position='left'></AvatarCard>
                    <div className={styles.descriptiontext}>
                        <h3>Hi we are dyan & iris</h3>
                    {paragraphsP.map((paragraph, index) =>
                        <p key={index}>{paragraph}</p>
                    )}
                    </div>
                    <AvatarCard img={dyanAvatar} name={'dyan'} description={['web designer', 'content creator']} position='right'></AvatarCard>
                
                </div>

                <div className={styles.concepts}>
                    <h3>OUR APPROACH IS PERSONAL
                        <img src={greenArrow} alt='green arrow icon'></img>
                    </h3>
                        
                    <div className={styles.conceptwrapper}
                    ref={cardRef}>
                        {concepts.map((concept, index) => 
                        <motion.div
                        animate={cardInView? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                        transition={{duration: 1, delay: index*0.5}}
                         key={index} className={styles.conceptcard}>
                            <h4>{concept.title}</h4>
                            <p>{concept.description}</p>
                        </motion.div>
                        )}
                    </div>
                </div>
                <div></div>
            </motion.div>

        </section>

    )
}
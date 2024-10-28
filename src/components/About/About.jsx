import styles from './about.module.css'
import supportIcon from '../../assets/images/About/supporticon.svg';
import customIcon from '../../assets/images/About/customsolutionsicon.svg';
import fairIcon from '../../assets/images/About/fairicon.svg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
    const [ref, inView] = useInView({threshold: 0.6, triggerOnce: true});

    function AboutCard({title, img, description, delay}) {
        const [ref2, inView2] = useInView({threshold: 0.4, triggerOnce: true})
        return (
            <motion.div className={styles.aboutcard}
            ref={ref2}
            initial={{opacity: 0, y: 100}}
            animate={inView2 && {opacity: 1, y: 0}}
            transition={{duration: 0.4, delay}}>
                <h3>{title}</h3>
                <img src={img} alt={`${title} icon`}></img>
                <p>{description}</p>
            </motion.div>

        )
    }

    return (
        <section id='about' className={styles.about}>
            <motion.div 
            ref={ref}
            initial={{opacity: 0, x: 100}}
            animate={inView && {opacity: 1, x:0}}
            transition={{duration: 0.5}}
            className={styles.aboutdiv}>
                <h2>our approach</h2>
                <div>
                    <AboutCard title={'custom solutions'} img={customIcon} description={"your website shouldn’t look like everyone else’s, just cause you're a small business. with original designs, we’ll bring your brand to life - no generic templates!"} delay={0.4}></AboutCard>
                    <AboutCard title={'fair & fresh'} img={fairIcon} description={"you don’t have to spend a fortune to get a kickass website. we offer creative, high-quality solutions at a price that makes sense for small businesses"} delay={0.6}></AboutCard>
                    <AboutCard title={'ongoing support'} img={supportIcon} description={"once your site is live, we don’t disappear. we provide support if you need it and make sure your website continues to grow with you."} delay={0.8}></AboutCard>
                </div>
            </motion.div>

        </section>

    )
}
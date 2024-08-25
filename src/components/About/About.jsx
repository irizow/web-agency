import styles from './about.module.css'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About({isDarkMode}) {
    const backgroundColor = isDarkMode ? '#2d2d2d' : '#f2f2f2';
    const {ref, inView} = useInView({threshold: 0.3})

    return (
        <section className={styles.about} ref={ref} style={{backgroundColor}}>
            
        <motion.p
        className={styles.aboutdescription}
        initial={{opacity: 0, y: -20}}
        animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: -40}}
        transition={{duration: 0.5, ease: 'easeIn'}}
        >We help your business grow by crafting a stunning digital presence that stands out.</motion.p>
        </section>

    )
}
import styles from './bento.module.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import innovaImg from '../../assets/images/innovativetech.png'

import phoneMagnIcon from '../../assets/images/phonemagnifying.png'
import laptopMagnIcon from '../../assets/images/laptopmagnifying.png'
import supportIcon from '../../assets/images/supporticon.png'
import customIcon from '../../assets/images/customicon.png'
import commitIcon from '../../assets/images/commitmenticon.png'
import backgroundImageLm from '../../assets/images/bentobackground.png'
import backgroundImageDm from '../../assets/images/bentobackgrounddm.png'
export default function Bento({isDarkMode}) {
    const [ref, inView]= useInView({threshold: 0.1})
    const [bento, bentoInView] = useInView()
    const backgroundColor = isDarkMode ? '#2d2d2d' : '#f2f2f2'
    const backgroundImage = isDarkMode ? backgroundImageDm : backgroundImageLm;
    return (
        <section id='about' ref={ref} className={styles.about} style={{backgroundColor}}>
            <motion.p
            initial={{opacity: 0, y: -20}}
            animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: -40}}
            transition={{duration: 0.5, ease: 'easeIn'}}
            >We help your business grow by crafting a stunning digital presence that stands out.</motion.p>
            <div ref={bento} className={styles.bento}>
            <motion.div 
            drag
            initial={{opacity: 0, y: -20}}
            animate={bentoInView? {opacity: 1, y: 0} : {opacity: 0, y: -20}}
            transition={{duration: 0.5, delay: 0.4, ease: 'easeIn'}}
            id={styles.box1} className={styles.bentobox}>
            CUSTOM-CODED WEBSITES
                <p className={styles.bentoboxp}>We create custom websites from scratch. Because your business deserves to be unique and tailored to your needs.</p>
                <img src={customIcon} loading="lazy" alt='icon of a computer with creative accessories' style={{width: '15vw'}}></img> 
            </motion.div>
            <motion.div
             initial={{opacity: 0, y: -20}}
             animate={bentoInView? {opacity: 1, y: 0} : {opacity: 0, y: -20}}
             transition={{duration: 0.5, delay: 0.5, ease: 'easeIn'}} 
             id={styles.box2} className={styles.bentobox}>INNOVATIVE TECH
                         <p className={styles.bentoboxp}>Our team uses the last technologies to ensure websites that offer the best optimization and latest trends</p>
                        <img src={innovaImg} loading="lazy" alt="semi abstract image of a computer with other tech devices"></img> </motion.div>
            <motion.div
             initial={{opacity: 0, y: -20}}
             animate={bentoInView? {opacity: 1, y: 0} : {opacity: 0, y: -20}}
             transition={{duration: 0.5, delay: 0.6, ease: 'easeIn'}}
             id={styles.box3} className={styles.bentobox}>FULL COMMITMENT
               <p className={styles.bentoboxp}>We just accept a few projects at a time to ensure that we are 100% commited to all the projects we work on.</p>
                <img src={commitIcon} loading="lazy" style={{width: '15vw'}} alt="icon of two hands shaking"></img> </motion.div>
            <motion.div 
             initial={{opacity: 0, y: -20}}
             animate={bentoInView? {opacity: 1, y: 0} : {opacity: 0, y: -20}}
             transition={{duration: 0.5, delay: 0.7, ease: 'easeIn'}}
            id={styles.box4} className={styles.bentobox}>24/7 SUPPORT
              <p className={styles.bentoboxp}>We are available all the days of the week at every time via phone, email and whatsapp to be able to fix every possible problem that can surge along the project</p>
                <img src={supportIcon} loading="lazy" style={{width: '15vw'}} alt="icon that represents customer support, with telephones and text bubbles"></img>
            </motion.div>
            
            <motion.div
             initial={{opacity: 0, y: -20}}
             animate={bentoInView? {opacity: 1, y: 0} : {opacity: 0, y: -20}}
             transition={{duration: 0.5, delay: 0.8, ease: 'easeIn'}}
             id={styles.box5} className={styles.bentobox}>
                <p className={styles.aboutdescription}>At <span>built by LIME</span> we believe in doing things better, which means your website is 100% custom-coded to fit your needs and is not restricted to the limitations caused by website builders. <br></br><br></br>We know that your business is unique, and so has to be your online presence. Our team uses the latest technology to deliver websites that are <span>fresh</span>, visually stunning and high-performing.</p></motion.div>
            <motion.div
             initial={{opacity: 0, y: -20}}
             animate={bentoInView? {opacity: 1, y: 0} : {opacity: 0, y: -20}}
             transition={{duration: 0.5, delay: 0.9, ease: 'easeIn'}}
             id={styles.box6} className={styles.bentobox}>RESPONSIVE & SEO OPTIMIZED
               <p className={styles.bentoboxp}>We design our projects on mobile, desktop and tablet to ensure your website works smoothly and all devices and optimize the content to position your business in all search engines and enhance your business visibility</p>
                <img src={laptopMagnIcon} loading="lazy" alt='image of a laptop with a magnifying glass' ></img></motion.div>
            <img className={styles.backgroundpicture} src={backgroundImage} alt="background image with a solid color"></img>
            </div>
        </section>
    )
}
import styles from './hero.module.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import backgroundDM from '../../assets/images/backgroundherodm.png'
import backgroundLM from '../../assets/images/backgroundherolm.png'
import { HashLink } from 'react-router-hash-link'

export default function Hero({isDarkMode, setShowForm}) {
    const {ref, inView } = useInView({threshold: 0.5})



    const variants = {
        visible: {
            opacity: 1,


        },

        hidden: {
            opacity: 0,
        }
    }

    const background = isDarkMode ? backgroundDM : backgroundLM

    console.log(isDarkMode)
    return (
        <>
        <motion.div id='hero' ref={ref}
        className={isDarkMode ? `${styles.herobox} ${styles.dark}` : `${styles.herobox} ${styles.light}`}
        variants={variants}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        transition={{duration: 0.5, ease: 'easeOut'}}>
            <motion.div className={styles.herotext}
             variants={{
                visible: {opacity: 1, y: 0},
                hidden: {opacity: 0, y: 75},
             }}
             initial='hidden'
             animate='visible'
             transition={{duration: 0.5, ease: 'easeIn'}}>
                <div className={styles.textdiv}>
                    <p> YOU DREAM IT,</p>
                    <p> WE BUILD IT.</p>
                </div>
        
                <HashLink to='#contact'>
                    <button className={styles.buttondiv} onClick={()=>{setShowForm(true)}}>Let's Work!</button>
                </HashLink>
           
            </motion.div>
         <motion.div
        drag
        className={styles.balloon}
        whileTap={{scale: 0.9}}
        whileHover={{
           translateY: 20,
           translateX: 20,
           transition: { type: 'spring', stiffness: 300 }
         }}></motion.div>
        </motion.div>
       
       </>
    
    )
}
import styles from './hero.module.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import backgroundDM from '../../assets/images/backgroundherodm.png'
import backgroundLM from '../../assets/images/backgroundherolm.png'
import { useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import { useRef } from 'react'

export default function Hero({isDarkMode}) {
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
        <motion.div ref={ref}
        className={isDarkMode ? `${styles.herobox} ${styles.dark}` : `${styles.herobox} ${styles.light}`}
        variants={variants}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        transition={{duration: 0.5, ease: 'easeOut'}}>
            <div className={styles.herotext}>
                <div className={styles.textdiv}>
                    <p> YOU DREAM IT,</p>
                    <p> WE BUILD IT.</p>
            </div>
            <div>
                <button className={styles.buttondiv}>Let's Work!</button>
            </div>
            </div>
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
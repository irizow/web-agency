import styles from './hero.module.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import { useRef } from 'react'

export default function Hero({isDarkMode}) {
    const {ref, inView } = useInView({threshold: 0.5})



    const variants = {
        visible: {
            opacity: 1,
            scale: 1.1,

        },

        hidden: {
            opacity: 0,
        }
    }

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
                <div>
                    <p> You dream it. We Build it.
                    </p>
                    <span>Lorem ipsum dolor amet and also some lorem ipsum as well.</span>
            </div>
            <button>Work With Us</button>
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
       <motion.div 
       className={styles.romboid}
       whileHover={{
        transform: 'rotate(200deg)',
        transition: { type: 'spring', duration: 4 }}}
        drag></motion.div>
        </motion.div>
       
       </>
    
    )
}
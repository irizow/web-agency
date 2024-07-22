import mountainCut from '../../assets/images/mountaincut.png'
import mountain from '../../assets/images/mountain.png'
import styles from './parallax.module.css'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Parallax() {

    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    })
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
    const textY = useTransform(scrollYProgress, [0,1], ['0%', '200%'])
    return (
        <div ref={ref} className={styles.parallaxdiv}>
            <motion.h1
                style={{y: textY}}
             className={styles.parallaxtitle}>PARROT WEBS</motion.h1>
            <motion.img
            style={{y: backgroundY}}
             src={mountain} className={styles.imagefull}></motion.img>
             
            <img src={mountainCut} className={styles.imagecut}></img>
        </div>      

    )
}
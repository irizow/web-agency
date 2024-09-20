import styles from './hero.module.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import backgroundDM from '../../assets/images/backgroundherodm.png'
import backgroundLM from '../../assets/images/backgroundherolm.png'
import mobilebkgDM from '../../assets/images/mobilebkgdm.png'
import mobilebkgLM from '../../assets/images/mobilebkglm.png'
import { HashLink } from 'react-router-hash-link'
import { useEffect, useState } from 'react'
import isMobile from '../../utils/isMobile'

export default function Hero({isDarkMode, setIsHeroVisible}) {
    const {ref, inView } = useInView({threshold: 0.4})

    useEffect(()=> {
        if(inView) {
            setIsHeroVisible(true)
        }
        else if(!inView) {
            setIsHeroVisible(false)
        }

    }, [inView])

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);





    const variants = {
        visible: {
            opacity: 1,


        },

        hidden: {
            opacity: 0,
        }
    }

    const backgroundImg = isDarkMode ? backgroundDM : backgroundLM;
    const mobilebackgroundImg = isDarkMode ? mobilebkgDM : mobilebkgLM;


    console.log(isDarkMode)
    return (
        <>
        <section id='hero' ref={ref}
        className={isDarkMode ? `${styles.herobox} ${styles.dark}` : `${styles.herobox} ${styles.light}`}
        variants={variants}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        transition={{duration: 0.5, ease: 'easeOut'}}>
            <img className={styles.backgroundgradient} src={matches ? backgroundImg : mobilebackgroundImg} alt="wavy green gradient background image"></img>
            <motion.div className={styles.herotext}>
                <div className={styles.textdiv}>
                    <motion.p
                    variants={{
                        visible: {opacity: 1, y: 0},
                        hidden: {opacity: 0, y:-20},
                     }}
                    initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
     
                    transition={{duration: 0.5, ease: 'easeIn'}}
                     className={styles.text2d}>Boring</motion.p>
                    <motion.p
                    variants={{
                        visible: {opacity: 1, y: 0},
                        hidden: {opacity: 0, y: -20},
                     }}
                    initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                
                    transition={{duration: 0.5, ease: 'easeIn'}}
                     className={styles.text2d}>designs?</motion.p>
                    <motion.p 
                    variants={{
                        visible: {opacity: 1, x: 0},
                        hidden: {opacity: 0, x: -20 },
                     }}
                    initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                  
                    transition={{duration: 0.5, delay: 0.5, ease: 'easeIn'}}
                    className={styles.text3d}>We don't</motion.p>
                    <motion.p
                    variants={{
                        visible: {opacity: 1, x: 0},
                        hidden: {opacity: 0, x: -20 },
                     }}
                    initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                
                    transition={{duration: 0.5, delay: 0.5, ease: 'easeIn'}}
                     className={styles.text3d}>know them </motion.p>
                </div>
        
                
           
            </motion.div>
        
            <HashLink to='#contact'>
         <motion.div
        drag
        dragConstraints={{
            top: -300,
            right: 10,
            left: -150,
            bottom: 0,
        }}
        className={styles.balloon}
        animate={inView ? { y:  [-1050, 0, -100, 0, -25, 0] } : matches ? {position: 'fixed', bottom: 2, right: 2, width: '15vh', height: '15vh', fontSize: '12px' } : {opacity: '0'}}
        transition={ matches ?  {
            duration: inView ? 2 : 2, 
            ease: "easeInOut", 
            delay: 1, 
            times: [0, 0.3, 0.6, 0.9, 1],
        
          } : {duration: inView ? 2 : 0.5, ease: 'easeInOut'}}
        whileTap={{scale: 0.9}}
        whileHover={{
           scale:1.1,
           border: '1px solid white',
           transition: { type: 'spring', stiffness: 300 }
         }}><p>WORK<br/> WITH US</p></motion.div>
         </HashLink>
        </section>
       
       </>
    
    )
}
import fist1 from '../../assets/images/fist1.png'
import fist2 from '../../assets/images/fist2.png'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './Fistbump.module.css'
import ContactForm from './Form'
import envelopeData from '../../utils/animations/envelope.json'
import { useState } from 'react'
import { isMobile } from 'react-device-detect'

export default function Fistbump({isDarkMode}) {



    const {ref, inView} = useInView({threshold: 0.5, once: true});

    const [showForm, setShowForm] = useState(false);

    const animationOptions = {
        loop: true,
        autoplay: true,
        animationData: envelopeData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }



    const variants= { 
        visible: {
            opacity: 1,
            display: 'flex',
            gap: '0',
            justifyContent: 'center',
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
                delay: 0.5,
            }
        },
        hidden: {
            opacity: 0,
            gap: '60rem',
            justifyContent: 'space-between',
            transition: {
                duration: 1, 
                ease: 'easeInOut' 
            }
        },

        title: {
            opacity: 1,
            scale: isMobile ? 1 : 1.5,
            cursor: 'pointer',
            padding: '0.5rem',
            transition: {
                duration: 0.5, 
                ease: 'easeInOut',

            }
        },
        titlehidden: {
            opacity: 0,
        }
    } 

    return (
        <div className={styles.contactcontainer}>
        <motion.div 
            ref={ref} 
            className={styles.container}
            variants={variants}
            animate={showForm ? 'moving' : ''}>
           {showForm || isMobile ? 
                  <motion.div className={styles.formdiv}
                  initial={{opacity: 0, x: 300}}
                  animate={inView ? {opacity: 1, x: 0} : {opacity: 0, x: 300}}
                  transition={{duration: 1}}>
                        <ContactForm/>
                </motion.div>
                :
                <>
                    <motion.h1
                        style={isDarkMode ? {color: 'white'} : {color: 'black'}}
                        whileHover={{fontSize: '38px'}}
                        variants={variants} 
                        initial='titlehidden'
                        animate={inView? 'title' : 'titlehidden'}
                        onClick={()=> setShowForm(true)}>WORK WITH US!
                    </motion.h1>
                    <motion.div
                        style={isDarkMode ? {filter: 'none'} : {filter: 'invert(100%)'}}
                        variants={variants}
                        initial='hidden'
                        animate={inView ? 'visible' : 'hidden'}
                    >
                        <img style={{width: '10rem', height:'10rem'}} src={fist2} alt="image of a fist bumping another one"></img>
                        <img style={{width: '10rem', height:'10rem'}}src={fist1} alt="image of a fist bumping another one"></img>
                    </motion.div>
                </>
                }
            
        </motion.div>
        

        </div>

    )
}
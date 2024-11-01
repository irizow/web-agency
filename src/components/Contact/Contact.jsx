import fist1 from '../../assets/images/fist1.png'
import fist2 from '../../assets/images/fist2.png'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './contact.module.css'
import ContactForm from './Form'
import envelopeData from '../../utils/animations/envelope.json'
import { useEffect, useState } from 'react'
import useMediaQuery from '../../utils/useMediaQueries'
import Lottie from 'react-lottie'
import sentAnimationData from '../../assets/icons/sent.json';
import contactTitle from '../../assets/images/contactitle.svg'


export default function Contact({showForm, setShowForm}) {
    const whatsappNumber = import.meta.env.VITE_REACT_APP_WHATSAPP_NUM;
    const isSmall = useMediaQuery('(max-width: 768px)')
    const {ref, inView} = useInView({threshold: isSmall ? 0.2 : 0.5, triggerOnce: true});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: sentAnimationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };


    const variants= 
        {
        
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

        title:
         {
            opacity: 1,
            scale: 2,
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
        <div className={styles.contactcontainer} id='contact'>
        <motion.div 
            ref={ref} 
            className={styles.container}
            variants={variants}
            animate={showForm ? 'moving' : ''}>
           {isSubmitted ?
           <div className={styles.submittedform}>
                <h3>¡Thank you!</h3>
                <p>We will reach out to you shortly so we can start creating your new stunning digital presence!</p>
                <Lottie options={defaultOptions} width={200} height={200}></Lottie>
           </div>
            : 
                  <motion.div className={styles.formcontainer}
                  initial={ isSmall? {x: 0} : {opacity: 0, x: 0}}
                  animate={inView ? {opacity: 1, x: 0} : isSmall ? {opacity: 0, x: 0} : {opacity: 0, x: 0}}
                  transition={{duration: 1}}>
                        
                        <ContactForm isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
                        <div className={styles.contactdiv}>
                            <span>hello@builtbylime.com</span>
                            <div className={styles.mediabox}>
                                <a target='_blank' href='https://www.instagram.com/builtbylime'>instagram</a>
                                <a target='_blank' href={`whatsapp://send?text=Hi, Built by Lime!&phone=${whatsappNumber}`}>whatsapp</a>
                            </div>
                        </div>
                </motion.div>
                }
            
        </motion.div>
        <div>

        </div>
        

        </div>

    )
}
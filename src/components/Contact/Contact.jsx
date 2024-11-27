
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './contact.module.css'
import ContactForm from './Form'
import envelopeData from '../../utils/animations/envelope.json'
import { useEffect, useState } from 'react'
import useMediaQuery from '../../utils/useMediaQueries'
import Lottie from 'react-lottie'
import sentAnimationData from '../../assets/icons/sent.json';



export default function Contact({showForm, setShowForm}) {
    const whatsappNumber = import.meta.env.VITE_REACT_APP_WHATSAPP_NUM;
    const isSmall = useMediaQuery('(max-width: 768px)')
    const {ref, inView} = useInView({threshold: 0.5});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: sentAnimationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };


    return (
        <div className={styles.contactcontainer} id='contact'>
        <motion.div 
            ref={ref} 
            className={styles.container}
            animate={inView ? {opacity: 1} : {opacity: 0}}
            transition={{duration: 0.6}}>
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
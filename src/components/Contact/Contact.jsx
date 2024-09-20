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


export default function Contact({isDarkMode, showForm, setShowForm}) {
    const isSmall = useMediaQuery('(max-width: 768px)')
    const {ref, inView} = useInView({threshold: 0.5, once: true});
    const backgroundColor = isDarkMode ? '#171717' : '#eeeeee'
    const [isSubmitted, setIsSubmitted] = useState(false);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: sentAnimationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };




    const [switchChecked, setSwitchChecked] = useState(false);

    useEffect(()=> {
        if (switchChecked) {
        const timeOut = setTimeout(()=> {
            setShowForm(true)
        }, 1000)

        return ()=> clearTimeout(timeOut)
    }

    }, [switchChecked])

    const animationOptions = {
        loop: true,
        autoplay: true,
        animationData: envelopeData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }



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
        <div className={styles.contactcontainer} id='contact' style={{backgroundColor}}>
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
            : showForm || isSmall ? 
                  <motion.div className={styles.formdiv}
                  initial={ isSmall? {x: -100} : {opacity: 0, x: 300}}
                  animate={inView ? {opacity: 1, x: 0} : isSmall ? {opacity: 0, x: 0} : {opacity: 0, x: 300}}
                  transition={{duration: 1}}>
                        <ContactForm isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
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
                    <div className={styles.switch} onClick={()=>{setSwitchChecked(!switchChecked); console.log('switch' + switchChecked)}}>
                        <span className={ switchChecked ? `${styles.switchtext} ${styles.textchecked}` : styles.switchtext}>GO!</span>
                    <span className={ switchChecked ? `${styles.slider} ${styles.checked}` : `${styles.slider}`} ></span>
                    </div>
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
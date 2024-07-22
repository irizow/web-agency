import styles from './footer.module.css'
import { useInView } from 'react-intersection-observer'
import parrotLogoDraw from '../../assets/images/parrotlogodraw.png'
import parrotLogoArch from '../../assets/images/parrotlogoarch.png'
import parrotLogoArchLM from '../../assets/images/parrotlogoarchlm.png'
import { motion } from 'framer-motion';

export default function Parallax({isDarkMode}) {
    const {ref, inView} = useInView({threshold: 0.5});
    const variants = {
        visible: {
            opacity: 1,
            x: 0,
            position: 'absolute',
            margin: '0 auto',
            transition: {
                duration: 1,
                ease: 'easeOut'
            }
        },
        hidden1: {
            opacity: 0,
            x: -100
        },
        hidden2: {
            opacity: 0,
            x: 100
        },
        hover: {
            scale: 1.5,
            rotate: '360deg',
            transition: {
                duration: 4,
                ease: 'easeOut'
            }
        }

    }
    return (
        <div>
            <div 
                className={styles.parallaxdiv}
                >
                
                    <motion.div 
                    className={styles.imagediv}
                    ref={ref}
                    variants={variants}
                    initial="hidden1"
                    animate={inView? "visible" : "hidden1"}
                     >
                        <img src={parrotLogoDraw} alt={"Parrot webs logo"} /> 
                    </motion.div>

                    <motion.div 
                    className={styles.imagediv}
                    ref={ref}
                    variants={variants}
                    initial="hidden2"
                    animate={inView? "visible" : "hidden2"}
                    whileHover={variants.hover}
                   >
                        <img src={ isDarkMode ? parrotLogoArch : parrotLogoArchLM} alt={"Parrot webs logo"} /> 
                    </motion.div>
                

            </div>

        </div>
    )
}
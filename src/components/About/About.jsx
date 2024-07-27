import styles from './about.module.css'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import customIcon from '../../assets/images/custom.png'
import commitIcon from '../../assets/images/commitment.png'
import supportIcon from '../../assets/images/support.png'
import techIcon from '../../assets/images/tech.png'
import scalableIcon from '../../assets/images/scalable.png'
import { useInView } from 'react-intersection-observer';
import aboutTitle from '../../assets/images/abouttitle.svg'

export default function About({isDarkMode, setTitle}) {

    const {ref, inView} = useInView({threshold: 0.1})

    useEffect(() => {
        if (inView) {
          setTitle(aboutTitle)
        }
      }, [inView])

    const variants={
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5, // Example duration for transition
                ease: 'easeInOut', // Example easing function
                delay: 0.5,
            }
        },
        hidden: {
            opacity: 0,
            transition: {
                duration: 1, // Example duration for transition
                ease: 'easeInOut' // Example easing function
            }
        }}
  
    
    
    const titles = [
        'Custom-coded Websites', 
        'Full Commitment', 
        '24/7 Support', 
        'Innovative Tech', 
        'Scalable'];
    const descriptions = [
        'Your website is built from scratch to be one-of-a kind',
        'We become your partner in success',
        'We’ve got your back, whenever you need it',
        ' We use the latest tools to ensure your site is top-notch',
        'Our websites are designed to grow with you '];

    const cardColors = ['rgb(153, 0, 255)', 'rgb(69, 115, 255)', 'orange', 'fuchsia', 'rgb(153, 0, 255)', ''];
    const cardIcons = [customIcon, commitIcon, supportIcon, techIcon, scalableIcon]

    function Card({title, description, index, cardColor, cardIcon}) {
        
        const backgroundColor = isDarkMode ? 'rgba(0, 0, 0, 0.98)' : 'rgba(255, 255, 255, 0.97)' 
        return (
            <div id='about' className={styles.cardcontainer}>
                <motion.div style={{ backgroundColor, background: `linear-gradient(${backgroundColor}, ${backgroundColor}, ${cardColor})`, marginTop: `calc(-5% + ${index * 30}px)`}} className={styles.card}>
                    <div className={styles.topcard}>
                        <img
                         className={styles.cardicons} 
                         style={isDarkMode ? {filter: 'invert(100%)'} : {filter: 'none'}} src={cardIcon}></img> 
                    </div>
                    <div className={styles.textcard}>
                        <h3 className={styles.title}>{title}</h3>
                        <p className={styles.description}>{description}</p>
                    </div>
                </motion.div>
            </div>
        )
    }


    return (
        <motion.div 
        ref={ref}
        style={isDarkMode ? {backgroundColor: 'black'} : {backgroundColor: 'white'}} 
        className={styles.cardstack}>
                {titles.map((title, index) => {

                    return <Card key={index} title={title} index={index} style={{position: 'sticky', top: '0px'}} description={descriptions[index]} cardIcon={cardIcons[index]} cardColor={cardColors[index]}  />
                })}
        </motion.div>

    )
}
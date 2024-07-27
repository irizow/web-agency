import Hero from "./Hero/Hero";
import About from './About/About'
import { motion, useAnimation } from "framer-motion";
import styles from './Home.module.css'
import Contact from "./Contact/Contact";
import Services from "./Services/Services";
import servicesTitle from "../assets/images/servicestitle2.svg"
import { useEffect, useState } from "react";
import useMediaQuery from "../utils/useMediaQueries";

export default function Home({isDarkMode, setShowForm, showForm}) {
    const isSmall = useMediaQuery('max-width: 768px')
    const controls = useAnimation();


    const [title, setTitle] = useState('')

    useEffect(() => {
        controls.start({
          opacity: [0.1, 0.3], 
          right: [-60, 0],
          transition: { duration: 0.5 },
        })
      }, [title, controls]);

 
    return (
        <div>
        <Hero isDarkMode={isDarkMode} setTitle={setTitle} setShowForm={setShowForm} />
        <About isDarkMode={isDarkMode} setTitle={setTitle} />
        <Services isDarkMode={isDarkMode} setTitle={setTitle}/>
        <Contact isDarkMode={isDarkMode} setShowForm={setShowForm} setTitle={setTitle} showForm={showForm} />
        <motion.img
        animate={controls}
        whileHover={{opacity: 1}} src={title} style={isDarkMode ? {filter: 'invert(100%)'} : {filter: 'none'}} className={styles.sidetitle}></motion.img>
        </div>
    )

}
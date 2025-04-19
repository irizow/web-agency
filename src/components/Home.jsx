import Hero from "./Hero/Hero";
import Hero2 from "./Hero/Hero2";
import styles from './home.module.css'
import Contact from "./Contact/Contact";
import Services from "./Services/Services";
import useMediaQuery from "../utils/useMediaQueries";
import Projects from "./Projects/Projects";
import About from "./About/About";
import Pricing from "./Pricing/Pricing"
import { useEffect } from "react";


export default function Home({ setShowForm, showForm}) {
    const isSmall = useMediaQuery('max-width: 768px')

    useEffect(() => {
        const hero = document.querySelector('#home');
        if (hero) {
          hero.scrollIntoView({
            behavior: 'auto',
            block: 'start',
          });
        }
      }, []);


 
    return (
        <div className={styles.homegrid}>
        <Hero2 />
        <About/>
        <Services/>
        <Projects />
        <Pricing />
        <Contact/>
        </div>
    )

}
import Hero from "./Hero/Hero";
import About from './About/About'
import { motion, useAnimation } from "framer-motion";
import styles from './Home.module.css'
import Contact from "./Contact/Contact";
import Services from "./Services/Services";
import servicesTitle from "../assets/images/servicestitle2.svg"
import { useEffect, useState } from "react";
import useMediaQuery from "../utils/useMediaQueries";
import Bento from "./Bento/Bento";
import Projects from "./Projects/Projects";

export default function Home({isDarkMode, setShowForm, showForm, setIsHeroVisible}) {
    const isSmall = useMediaQuery('max-width: 768px')


 
    return (
        <div>
        <Hero setIsHeroVisible={setIsHeroVisible} isDarkMode={isDarkMode} setShowForm={setShowForm} />
        <Bento isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode}/>
        <Services isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} setShowForm={setShowForm} showForm={showForm} />

        </div>
    )

}
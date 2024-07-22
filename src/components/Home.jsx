import Hero from "./Hero/Hero";
import { CardStack } from "./CardStack/CardStack";
import { motion, useTransform, useSpring, useScroll } from "framer-motion";
import Fistbump from "./Fistbump/Fistbump";
import Services from "./Services/Services";

export default function Home({isDarkMode}) {
    return (
        <motion.div>
        <Hero isDarkMode={isDarkMode} />
        <CardStack isDarkMode={isDarkMode}/>
        <Services/>
        <Fistbump isDarkMode={isDarkMode}/>
        </motion.div>
    )

}
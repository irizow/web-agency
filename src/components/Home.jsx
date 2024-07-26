import Hero from "./Hero/Hero";
import { CardStack } from "./CardStack/CardStack";
import { motion} from "framer-motion";
import Fistbump from "./Fistbump/Fistbump";
import Services from "./Services/Services";

export default function Home({isDarkMode}) {

    return (
        <div>
        <Hero isDarkMode={isDarkMode} />
        <CardStack isDarkMode={isDarkMode}/>
        <Services isDarkMode={isDarkMode}/>
        <Fistbump isDarkMode={isDarkMode}/>
        </div>
    )

}
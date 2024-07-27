import Hero from "./Hero/Hero";
import { CardStack } from "./CardStack/CardStack";
import { motion} from "framer-motion";
import Fistbump from "./Fistbump/Fistbump";
import Services from "./Services/Services";

export default function Home({isDarkMode, setShowForm, showForm}) {

    return (
        <div>
        <Hero isDarkMode={isDarkMode} setShowForm={setShowForm} />
        <CardStack isDarkMode={isDarkMode}/>
        <Services isDarkMode={isDarkMode}/>
        <Fistbump isDarkMode={isDarkMode} setShowForm={setShowForm} showForm={showForm} />
        </div>
    )

}
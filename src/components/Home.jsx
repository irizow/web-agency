import Hero from "./Hero/Hero";
import Contact from "./Contact/Contact";
import Services from "./Services/Services";
import useMediaQuery from "../utils/useMediaQueries";
import Projects from "./Projects/Projects";
import About from "./About/About";
import Pricing from "./Pricing/Pricing"

export default function Home({ setShowForm, showForm}) {
    const isSmall = useMediaQuery('max-width: 768px')


 
    return (
        <div>
        <Hero setShowForm={setShowForm} />
        <About/>
        <Services />
        <Projects />
        <Pricing />
        <Contact setShowForm={setShowForm} showForm={showForm}  />
        </div>
    )

}
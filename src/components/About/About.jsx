import styles from './about.module.css'
import irisAvatar from '../../assets/images/About/irisavatar.webp';
import dyanAvatar from '../../assets/images/About/dyanavatar.webp'
import greenArrow from '../../assets/images/About/greenarrow.svg'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useMediaQuery from '../../utils/useMediaQueries';
import TitleScroll from '../TitleScroll/TitleScroll';
import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

export default function About() {
    const isSmall = useMediaQuery('(max-width: 768px)');
    const [ref, inView] = useInView({threshold: isSmall ? 0.1 : 0.4, triggerOnce: true});
    const [cardRef, cardInView] = useInView({threshold: 0.5});
    const {language} = useContext(LanguageContext)

    const translations = {
        en: {
            title: 'ABOUT',
            greeting: 'Hi we are dyan & iris',
            approach: 'OUR APPROACH IS PERSONAL',
          paragraphsP: [
            "--two creative minds who love helping small businesses stand out online. We create websites that are uniquely yours—affordable, impactful, and built to grow with your business.",
            "When we’re not building websites, we’re traveling, geeking out over tech and music, or planning our next big adventure."
          ],
          concepts: [
            {
              title: 'DISCOVER & DEFINE',
              description: `We start with a friendly chat to understand your needs and ideas. We’ll discuss your goals, inspiration, and how your website can best represent your business.`
            },
            {
              title: 'DESIGN & BUILD',
              description: `With your input, we’ll create a custom design that reflects your brand’s personality. We will update throughout so you can provide feedback. Once approved, we’ll bring it to life.`
            },
            {
              title: 'LAUNCH & SUPPORT',
              description: `Once your site is live, we are here to help with updates, tweaks or ongoing support, growing with your business as needed.`
            }
          ]
        },
        sp: {
            title: 'NOSOTRAS',
            greeting: 'Hola, somos Dyan e Iris',
            approach: 'NUESTRA FORMA DE TRABAJAR ES PERSONAL',
          paragraphsP: [
            "--dos mentes creativas que disfrutan ayudando a pequeños negocios a destacar en línea. Creamos sitios web únicos—asequibles, impactantes y diseñados para crecer con tu negocio.",
            "Cuando no estamos creando sitios web, estamos viajando, disfrutando de la tecnología y la música, o planeando nuestra próxima gran aventura."
          ],
          concepts: [
            {
              title: "DESCUBRIR Y DEFINIR",
              description: `Comenzamos con una charla amigable para entender tus necesidades e ideas. Hablamos sobre tus objetivos, inspiración y cómo tu sitio web puede representar mejor a tu negocio.`
            },
            {
              title: "DISEÑAR Y CONSTRUIR",
              description: `Con tu aporte, crearemos un diseño personalizado que refleje la personalidad de tu marca. Te mantendremos al tanto durante el proceso para que puedas dar tu opinión. Una vez aprobado, lo haremos realidad.`
            },
            {
              title: "LANZAMIENTO Y SOPORTE",
              description: `Una vez que tu sitio esté en línea, estamos aquí para ayudarte con actualizaciones, ajustes o soporte continuo, creciendo junto a tu negocio según lo necesites.`
            }
          ]
        },
        ca: {
            title: 'NOSALTRES',
            greeting: 'Hola, som la Dyan i l’Iris',
            approach: 'LA NOSTRA APROXIMACIÓ ÉS PERSONAL',
          paragraphsP: [
            "--dues ments creatives que estimen ajudar petits negocis a destacar en línia. Creem llocs web únics—assequibles, impactants i preparats per créixer amb el teu negoci.",
            "Quan no estem creant webs, estem viatjant, gaudint de la tecnologia i la música, o planejant la nostra pròxima gran aventura."
          ],
          concepts: [
            {
              title: "DESCOBRIR I DEFINIR",
              description: `Comencem amb una conversa amigable per entendre les teves necessitats i idees. Parlem sobre els teus objectius, inspiracions i com el teu lloc web pot representar millor el teu negoci.`
            },
            {
              title: "DISSENYAR I CONSTRUIR",
              description: `Amb la teva aportació, crearem un disseny personalitzat que reflecteixi la personalitat de la teva marca. T’anirem mostrant l’evolució perquè puguis donar feedback. Un cop aprovat, el farem realitat.`
            },
            {
              title: "LLANÇAMENT I SUPORT",
              description: `Quan el teu lloc estigui actiu, estarem aquí per ajudar-te amb actualitzacions, ajustos o suport continu, creixent amb el teu negoci segons les teves necessitats.`
            }
          ]
        }
      };

    function AvatarCard({img, name, description, position}) {
        return (
            <figure className={styles.avatarcard}>
                {position === 'right' &&
                <img src={img} alt={`${name}'s avatar`}></img>}
                <figcaption>
                <h1>{name}</h1>
                <ul>
                    {description.map((item, index) =>
                        <li key={index}>{item}</li>
                    )}
                </ul>
                </figcaption>
                {position === 'left' &&
                <img src={img} alt={`${name}'s avatar`}></img>}

            </figure>
        )
    }
     

    return (
        <section id='about' className={styles.about}>
            <TitleScroll  name={translations[language].title}></TitleScroll>
            <motion.div 
            ref={ref}
            animate={inView ? {opacity: 1} : {opacity: 0}}
            transition={{duration: 0.4}}
            className={styles.separator}>
                <div className={styles.description}>
                    <AvatarCard img={irisAvatar} name={'iris'} description={['web developer', 'marketing guru']} position='left'></AvatarCard>
                    <div className={styles.descriptiontext}>
                        <h3>{translations[language].greeting}</h3>
                    {translations[language].paragraphsP.map((paragraph, index) =>
                        <p key={index}>{paragraph}</p>
                    )}
                    </div>
                    <AvatarCard img={dyanAvatar} name={'dyan'} description={['web designer', 'content creator']} position='right'></AvatarCard>
                
                </div>

                <div className={styles.concepts}>
                    <h3>{translations[language].approach}
                        <img src={greenArrow} alt='green arrow icon'></img>
                    </h3>
                        
                    <div className={styles.conceptwrapper}
                    ref={cardRef}>
                        {translations[language].concepts.map((concept, index) => 
                        <motion.div
                        animate={cardInView? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                        transition={{duration: 1, delay: index*0.5}}
                         key={index} className={styles.conceptcard}>
                            <h4>{concept.title}</h4>
                            <p>{concept.description}</p>
                        </motion.div>
                        )}
                    </div>
                </div>
                <div></div>
            </motion.div>

        </section>

    )
}
import styles from './services.module.css'
import maintenanceImg from '../../assets/images/Services/maintenance.svg';
import designImg from '../../assets/images/Services/design.svg';
import contentImg from '../../assets/images/Services/content.svg';
import brandingImg from '../../assets/images/Services/branding.svg';
import designVect from '../../assets/images/Services/designvector.svg';
import contentVect from '../../assets/images/Services/contentvector.svg';
import brandingVect from '../../assets/images/Services/brandingvector.svg';
import plusIcon from '../../assets/images/Services/addbutton.svg';
import minusIcon from '../../assets/images/Services/minusbutton.svg';
import useMediaQuery from '../../utils/useMediaQueries';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TitleScroll from '../TitleScroll/TitleScroll';
import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

export default function Services() {
        const isSmall = useMediaQuery('(max-width: 768px)');
        const {language} = useContext(LanguageContext);
        const translations = {
          en: {
            title: 'SERVICES',
            services: [
              {
                title: 'web design & development',
                subtitle: 'we build websites that do more than just look good—they perform.',
                text1: 'we fuse creativity with strategy, creating custom sites that engage your visitors and turn them into loyal customers.',
                text2: 'all sites custom built using html, css, js and react.',
                img: isSmall ? designVect : designImg,
                alt: 'drawing of a laptop and a code editor',
                id: 1,
              },
              {
                title: 'logo & branding',
                subtitle: 'your brand’s identity should be as unique as the business you’ve built.',
                text1: 'we design logos and visual systems that reflect your core values and resonate with your target audience.',
                text2: 'each branding package is crafted with strategy, clarity, and creative flair.',
                img: isSmall ? brandingVect : brandingImg,
                alt: 'drawing of design tablet',
                id: 2,
              },
              {
                title: 'content creation',
                subtitle: 'captivating content is key to driving engagement and building your brand.',
                text1: 'we craft compelling visuals and copy that spark interest and drive action across platforms.',
                text2: 'from social media to websites, we help you tell your story with clarity and style.',
                img: isSmall ? contentVect : contentImg,
                alt: 'drawing of an instagram picture of a cat',
                id: 3,
              },
              {
                title: 'web maintenance',
                subtitle: 'your website is the face of your business, and it needs regular care to stay in top shape.',
                text1: 'we handle updates, backups, and security to keep your site running smoothly and safely.',
                text2: 'think of us as your on-call digital support team.',
                img: maintenanceImg,
                alt: 'drawing that suggests settings on websites',
                id: 4,
              },
            ]
          },
          sp: {
            title: 'SERVICIOS',
            services: [
              {
                title: 'diseño y desarrollo web',
                subtitle: 'creamos sitios que no solo se ven bien—también funcionan.',
                text1: 'fusionamos creatividad y estrategia para crear sitios personalizados que cautivan a tus visitantes y los convierten en clientes fieles.',
                text2: 'todos los sitios están hechos a medida con html, css, js y react.',
                img: isSmall ? designVect : designImg,
                alt: 'dibujo de un portátil y un editor de código',
                id: 1,
              },
              {
                title: 'logotipo e identidad de marca',
                subtitle: 'la identidad de tu marca debe ser tan única como el negocio que has creado.',
                text1: 'diseñamos logotipos y sistemas visuales que reflejan tus valores y conectan con tu audiencia ideal.',
                text2: 'cada paquete de branding se elabora con estrategia, claridad y un toque creativo.',
                img: isSmall ? brandingVect : brandingImg,
                alt: 'dibujo de una tableta de diseño',
                id: 2,
              },
              {
                title: 'creación de contenido',
                subtitle: 'el contenido cautivador es clave para generar interacción y construir tu marca.',
                text1: 'creamos visuales atractivos y textos que generan interés y provocan acción en todos los canales.',
                text2: 'desde redes sociales hasta sitios web, te ayudamos a contar tu historia con claridad y estilo.',
                img: isSmall ? contentVect : contentImg,
                alt: 'dibujo de una foto de Instagram de un gato',
                id: 3,
              },
              {
                title: 'mantenimiento web',
                subtitle: 'tu sitio web es la cara de tu negocio, y necesita cuidados regulares para mantenerse en forma.',
                text1: 'nos encargamos de actualizaciones, copias de seguridad y seguridad para que tu sitio funcione sin problemas.',
                text2: 'piensa en nosotros como tu equipo de soporte digital bajo demanda.',
                img: maintenanceImg,
                alt: 'dibujo que sugiere configuraciones en sitios web',
                id: 4,
              },
            ]
          },
          ca: {
            title: 'SERVEIS',
            services: [
              {
                title: 'disseny i desenvolupament web',
                subtitle: 'creem webs que no només es veuen bé—també funcionen.',
                text1: 'fusionem creativitat i estratègia per crear webs personalitzats que captiven als visitants i els converteixen en clients fidels.',
                text2: 'tots els llocs estan creats a mida amb html, css, js i react.',
                img: isSmall ? designVect : designImg,
                alt: 'dibuix d’un portàtil i un editor de codi',
                id: 1,
              },
              {
                title: 'logotip i identitat de marca',
                subtitle: 'la identitat de la teva marca hauria de ser tan única com el negoci que has creat.',
                text1: 'dissenyem logotips i sistemes visuals que reflecteixen els teus valors i connecten amb el teu públic objectiu.',
                text2: 'cada paquet de marca està elaborat amb estratègia, claredat i creativitat.',
                img: isSmall ? brandingVect : brandingImg,
                alt: 'dibuix d’una tauleta de disseny',
                id: 2,
              },
              {
                title: 'creació de contingut',
                subtitle: 'el contingut captivador és clau per generar interacció i fer créixer la teva marca.',
                text1: 'creem visuals atractius i textos que generen interès i acció a totes les plataformes.',
                text2: 'des de xarxes socials fins a webs, t’ajudem a explicar la teva història amb estil i claredat.',
                img: isSmall ? contentVect : contentImg,
                alt: 'dibuix d’una foto d’Instagram d’un gat',
                id: 3,
              },
              {
                title: 'manteniment web',
                subtitle: 'el teu lloc web és la cara del teu negoci i necessita cures regulars per mantenir-se en forma.',
                text1: 'ens encarreguem de les actualitzacions, còpies de seguretat i seguretat perquè el teu web funcioni de manera fluida i segura.',
                text2: 'pensa en nosaltres com el teu equip digital de confiança.',
                img: maintenanceImg,
                alt: 'dibuix que suggereix configuració en llocs web',
                id: 4,
              },
            ]
          }
        };
        

    function ServicesCard({title, subtitle, text1, text2, img, alt, id, x, y}) {
        const [isOpen, setIsOpen] = useState(false);
        const [ref2, inView2] = useInView({threshold: 0.4})

        const handleClick = ()=> {
            setIsOpen(!isOpen);
            console.log(isOpen)
        }

        return (
            <motion.div 
            ref={ref2}
            animate={inView2 ? {opacity: 1, x: 0, y: 0} : {opacity: 0, x, y}}
            transition={{duration: 1, delay: 0}}
            onClick={handleClick}
            className={isOpen ?`${styles.servicescard} ${styles.open}` : `${styles.servicescard}`} id={'box'+id}>
                
                <div>
                <img src={isOpen ? minusIcon : plusIcon} onClick={handleClick} className={styles.plusicon} alt='plus icon'></img>
                <h3>{title}</h3>
                <span>{subtitle}</span>
                {isSmall && isOpen || !isSmall ?
                <div className={styles.cardtext}>
                    <p>{text1} </p>
                    <p>{text2}</p>
                </div> :
                <></>
                }
                
                </div>
                
                <img  loading='lazy'  className={styles.cardimg} src={img} alt={alt}></img>
            </motion.div>
        )
    }




    return (
    
        <section
         id='services' className={styles.services}
       
        >
           <TitleScroll name={translations[language].title}></TitleScroll>
           <div className={styles.servicesflex}>
                <ServicesCard key={translations[language].services[0].id} title={translations[language].services[0].title} subtitle={translations[language].services[0].subtitle} text1={translations[language].services[0].text1} text2={translations[language].services[0].text2} img={translations[language].services[0].img} id={translations[language].services[0].id} x={isSmall ? 0 : -100} y={isSmall ? 50 : 0}  />
                <ServicesCard key={translations[language].services[2].id} title={translations[language].services[2].title} subtitle={translations[language].services[2].subtitle} text1={translations[language].services[2].text1} text2={translations[language].services[2].text2} img={translations[language].services[2].img} id={translations[language].services[2].id} x={0} y={isSmall ? 50 : 100} />
                <ServicesCard key={translations[language].services[1].id} title={translations[language].services[1].title} subtitle={translations[language].services[1].subtitle} text1={translations[language].services[1].text1} text2={translations[language].services[1].text2} img={translations[language].services[1].img} id={translations[language].services[1].id} x={0} y={isSmall ? 50 : -100} />
                <ServicesCard key={translations[language].services[3].id} title={translations[language].services[3].title} subtitle={translations[language].services[3].subtitle} text1={translations[language].services[3].text1} text2={translations[language].services[3].text2} img={translations[language].services[3].img} id={translations[language].services[3].id} x={isSmall ? 0 : 100} y={isSmall ? 50 : 0} />
           </div>
           
        </section>

    )
}
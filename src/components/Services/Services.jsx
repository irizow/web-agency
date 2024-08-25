import styles from './services.module.css'
import ServiceCard from './ServiceCard'
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import useMediaQuery from '../../utils/useMediaQueries';
import backgroundDesktop from '../../assets/images/backgroundservices.png'
import backgroundMobile from '../../assets/images/mobileservicebkg.webp'


export default function Services({isDarkMode}) {
    const isSmall = useMediaQuery('max-width: 768px')
    const [isMonthly, setIsMonthly] = useState(false);
    const {ref, inView} = useInView({threshold: 0.3})

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);


  const backgroundImage = matches ? backgroundDesktop : backgroundMobile;


 const servicesMonthly = [
    {title: 'Basic',
    description: 'Landing Page',
    price: '$200/MO',
    features: ['Hosting Included', 'Full Customer Service', '3 Custom Edits/Month']
    },
    {
        title: 'Standard',
    description: 'Up to 3 pages',
    price: '$250/MO',
    features: ['Hosting Included', 'Full Customer Service', '5 Custom Edits/Month', '50$ Extra Page']
    },
    {
        title: 'Pro',
    description: 'Up to 5 pages',
    price: '$300/MO',
    features: ['Hosting Included', '1 Year free domain', 'Full Customer Service', 'Unlimited Edits']
    }
 ]
 const servicesOneTime = [
    {title: 'Basic',
    description: 'Landing Page',
    price: '$600',
    features: ['1 Year Hosting Included', 'Full Customer Service', '5 Edits/1st Year']
    },
    {
        title: 'Standard',
    description: 'Up to 3 pages',
    price: '$800',
    features: ['1 Year Hosting Included', 'Full Customer Service', '10 Edits/1st Year', '150$ Extra Page']
    },
    {
        title: 'Pro',
    description: 'Up to 5 pages',
    price: '$1500',
    features: ['1 Year Hosting Included', '1 Year free domain', 'Full Customer Service', '10 Edits/1st Year']
    }
 ]

 const serviciosMensuales = [
    {
        title: 'Desarrollo Web Básico',
        description: 'Página de Aterrizaje',
        price: '$100/MES',
        features: ['Hosting Incluido', 'Atención al Cliente Completa', '3 Ediciones Personalizadas/Mes']
    },
    {
        title: 'Desarrollo Web Estándar',
        description: 'Hasta 3 páginas',
        price: '$150/MES',
        features: ['Hosting Incluido', 'Atención al Cliente Completa', '5 Ediciones Personalizadas/Mes', '50$ Página Extra']
    },
    {
        title: 'Desarrollo Web Pro',
        description: 'Hasta 5 páginas',
        price: '$200/MES',
        features: ['Hosting Incluido', '1 Año de Dominio Gratis', 'Atención al Cliente Completa', 'Ediciones Ilimitadas']
    }
]

const serviciosUnicos = [
    {
        title: 'Desarrollo Web Básico',
        description: 'Página de Aterrizaje',
        price: '$600',
        features: ['1 Año de Hosting Incluido', 'Atención al Cliente Completa', '5 Ediciones/1er Año']
    },
    {
        title: 'Desarrollo Web Estándar',
        description: 'Hasta 3 páginas',
        price: '$800',
        features: ['1 Año de Hosting Incluido', 'Atención al Cliente Completa', '10 Ediciones/1er Año', '150$ Página Extra']
    },
    {
        title: 'Desarrollo Web Pro',
        description: 'Hasta 5 páginas',
        price: '$1500',
        features: ['1 Año de Hosting Incluido', '1 Año de Dominio Gratis', 'Atención al Cliente Completa', '10 Ediciones/1er Año', 'Diseño de Logotipo Gratis']
    }
]



 const services = isMonthly ? servicesMonthly : servicesOneTime;
 const color = isDarkMode ? 'white' : 'black'

    return (
    
        <section ref={ref} id='services' className={styles.servicesmaindiv} style={{backgroundImage: `url(${backgroundImage})`}}>
             <h1>PRICING</h1>
            
            <div className={styles.buttonbox}>
                <span className={styles.selectionspan} style={isMonthly ? {color: '#973cff'} : { color }}>Subscription</span>
                <label className={styles.switch}>
                <input onClick={()=>setIsMonthly(!isMonthly)} type="checkbox"/>
                <span className={styles.slider}></span>
                </label>
                <span className={styles.selectionspan}  style={!isMonthly ?  {color: '#973cff'} : { color }} >One Time</span>
             </div>
            <div className={styles.servicesdiv}>
                {services.map((service, index) =>
                 <ServiceCard key={index} title={service.title} description={service.description} features={service.features} price={service.price} isDarkMode={isDarkMode}/>)}
            </div>
            
           
        </section>

    )
}
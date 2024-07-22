import styles from './services.module.css'
import ServiceCard from './ServiceCard'
import { useState } from 'react';
import Header from '../Header/Header';

export default function Services({isDarkMode}) {
    const [isMonthly, setIsMonthly] = useState(true);

 const servicesMonthly = [
    {title: 'Web Development Basic',
    description: 'Landing Page',
    price: '$50/MO',
    features: ['Hosting Included', 'Full Customer Service', '3 Custom Edits/Month']
    },
    {
        title: 'Web Development Standard',
    description: 'Up to 3 pages',
    price: '$100/MO',
    features: ['Hosting Included', 'Full Customer Service', '5 Custom Edits/Month', '50$ Extra Page']
    },
    {
        title: 'Web Development Pro',
    description: 'Up to 5 pages',
    price: '$150/MO',
    features: ['Hosting Included', '1 Year free domain', 'Full Customer Service', 'Unlimited Edits']
    }
 ]
 const servicesOneTime = [
    {title: 'Web Development Basic',
    description: 'Landing Page',
    price: '$600',
    features: ['1 Year Hosting Included', 'Full Customer Service', '5 Edits/1st Year']
    },
    {
        title: 'Web Development Standard',
    description: 'Up to 3 pages',
    price: '$800',
    features: ['1 Year Hosting Included', 'Full Customer Service', '10 Edits/1st Year', '150$ Extra Page']
    },
    {
        title: 'Web Development Pro',
    description: 'Up to 5 pages',
    price: '$1500',
    features: ['1 Year Hosting Included', '1 Year free domain', 'Full Customer Service', '10 Edits/1st Year']
    }
 ]

 const serviciosMensuales = [
    {
        title: 'Desarrollo Web Básico',
        description: 'Página de Aterrizaje',
        price: '$50/MES',
        features: ['Hosting Incluido', 'Atención al Cliente Completa', '3 Ediciones Personalizadas/Mes']
    },
    {
        title: 'Desarrollo Web Estándar',
        description: 'Hasta 3 páginas',
        price: '$100/MES',
        features: ['Hosting Incluido', 'Atención al Cliente Completa', '5 Ediciones Personalizadas/Mes', '50$ Página Extra']
    },
    {
        title: 'Desarrollo Web Pro',
        description: 'Hasta 5 páginas',
        price: '$150/MES',
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

    return (
    
        <div className={styles.servicesmaindiv}>
            <div className={styles.buttonbox}>
                <button className={styles.selectionbutton} style={!isMonthly ? {backgroundColor: 'black'} : {backgroundColor: ' rgb(148, 0, 247)'}} onClick={()=>setIsMonthly(true)}>Subscription</button>
                <button className={styles.selectionbutton} style={isMonthly ? {backgroundColor: 'black'} : {backgroundColor: ' rgb(148, 0, 247)'}}  onClick={()=>setIsMonthly(false)}>One Time Payment</button>
             </div>
            <div className={styles.servicesdiv}>
                {services.map((service, index) =>
                 <ServiceCard key={index} title={service.title} description={service.description} features={service.features} price={service.price} />)}
            </div>
        </div>

    )
}
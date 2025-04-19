import styles from './pricing.module.css';
import doneIcon from '../../assets/images/Pricing/Done.svg';
import purpleLime from '../../assets/images/Pricing/purplelime.svg'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useMediaQuery from '../../utils/useMediaQueries';
import TitleScroll from '../TitleScroll/TitleScroll';
import { LanguageContext } from '../../context/LanguageContext';
import { useContext } from 'react';

export default function Pricing() {
    const {language} = useContext(LanguageContext);
    const isSmall = useMediaQuery('(max-width: 768px)')

    const translation = {
        en: {
            title: 'PRICING',
            ideal: 'ideal for: ',
            button: 'contact',
            pricings :[
            {
                description: 'landing page',
                features: ['1 custom-designed landing page', '1 year free domain + hosting', 'mobile responsive design', 'web maintenance', 'up to 5 edits per year'],
                recommendation: 'businesses that need a simple, sleek online presence',
                price: '$600',
            },
            {
                description: 'branding package',
                features: ['custom logo design', 'brand color palette', 'typography selection', 'brand guidelines PDF', '2 rounds of revisions'],
                recommendation: 'startups or businesses building a new identity',
                price: '$800',
            },
            {
                description: 'up to 3 pages',
                features: ['landing +  2 internal pages', '1 year free domain + hosting', 'mobile responsive design', 'web maintenance', 'up to 10 edits per year'],
                recommendation: 'businesses that  need more room to tell their story',
                price: '$900',
            },
            {
                description: '5+ pages',
                features: ['landing page + 5+ internal pages', '1 year free domain + hosting', 'mobile responsive design', 'web maintenance', 'up to 20 edits per year'],
                recommendation: 'businesses that need a more detailed site to display multiple content, products, or services',
                price: '$1500',
            },
        ]},
        sp: {
            title: 'PRECIOS',
            button: 'contacta',
            ideal: 'ideal para: ',
            pricings: [
            {
                description: 'página de aterrizaje',
                features: ['1 página de aterrizaje personalizada', '1 año de dominio + hosting gratis', 'diseño responsive para móviles', 'mantenimiento web', 'hasta 5 ediciones por año'],
                recommendation: 'empresas que necesitan una presencia online simple y elegante',
                price: '$600',
            },
            {
                description: 'paquete de branding',
                features: ['diseño de logotipo personalizado', 'paleta de colores de marca', 'selección tipográfica', 'guía de estilo en PDF', '2 rondas de revisiones'],
                recommendation: 'startups o negocios que crean una nueva identidad',
                price: '$800',
            },
            {
                description: 'hasta 3 páginas',
                features: ['página de inicio + 2 páginas internas', '1 año de dominio + hosting gratis', 'diseño responsive para móviles', 'mantenimiento web', 'hasta 10 ediciones por año'],
                recommendation: 'empresas que necesitan más espacio para contar su historia',
                price: '$900',
            },
            {
                description: '5+ páginas',
                features: ['página de inicio + 5+ páginas internas', '1 año de dominio + hosting gratis', 'diseño responsive para móviles', 'mantenimiento web', 'hasta 20 ediciones por año'],
                recommendation: 'empresas que necesitan un sitio más detallado para mostrar contenido, productos o servicios',
                price: '$1500',
            },
        ]},
        ca: {
            title: 'PREUS',
            button: 'contacta',
            ideal: 'ideal per a: ',
            pricings: [
            {
                description: 'pàgina d’aterratge',
                features: ['1 pàgina d’aterratge personalitzada', '1 any de domini + allotjament gratuït', 'disseny adaptat a mòbils', 'manteniment web', 'fins a 5 edicions per any'],
                recommendation: 'negocis que necessiten una presència en línia senzilla i elegant',
                price: '$600',
            },
            {
                description: 'paquet de marca',
                features: ['disseny de logotip personalitzat', 'paleta de colors de marca', 'selecció tipogràfica', 'guia d’estil en PDF', '2 rondes de revisions'],
                recommendation: 'startups o negocis que creen una nova identitat',
                price: '$800',
            },
            {
                description: 'fins a 3 pàgines',
                features: ['pàgina inicial + 2 pàgines internes', '1 any de domini + allotjament gratuït', 'disseny adaptat a mòbils', 'manteniment web', 'fins a 10 edicions per any'],
                recommendation: 'negocis que necessiten més espai per explicar la seva història',
                price: '$900',
            },
            {
                description: '5+ pàgines',
                features: ['pàgina inicial + 5+ pàgines internes', '1 any de domini + allotjament gratuït', 'disseny adaptat a mòbils', 'manteniment web', 'fins a 20 edicions per any'],
                recommendation: 'negocis que necessiten un lloc més detallat per mostrar contingut, productes o serveis',
                price: '$1500',
            },
        ]}
    };

    function PricingCard({description, features, recommendation, price, delay}) {
        const [ref, inView] = useInView({threshold: 0.3, triggerOnce: true})
        return (
            <motion.div 
            id='prices'
            ref={ref}
            initial={{opacity: 0, y: isSmall ? 0 : 100, scale: isSmall ? 0.6 : 1}}
            animate={inView && {opacity: 1, y: 0, scale: 1}}
            transition={{duration: 0.8, delay: isSmall ? 0 : delay}}
            className={styles.pricingcard}>
                <h3>{description}</h3>
                <ul>
                    {features.map((feature, index) =>
                    <div
                    key={index}>
                        <img src={doneIcon} alt='check icon'></img>
                        <li key={index}>{feature}</li>
                    </div>
                    )}
                </ul>
                <div className={styles.recommendationdiv}>
                    <img src={purpleLime} alt={'icon of a purple lime'}></img>
                    <div>
                        <span><strong>{translation[language].ideal}</strong></span>
                        <span>{recommendation}</span>
                    </div>
                </div>
                <div className={styles.pricediv}>
                    <p className={styles.price}>{price}</p>
                    <HashLink smooth to='#contact'>
                    <button>{translation[language].button}</button>
                    </HashLink>
                </div>
                
            </motion.div>
        )
    }

    return (
        <section className={styles.pricing}>
            <TitleScroll name={translation[language].title} />
            <div className={styles.pricingwrapper}>
                {translation[language].pricings.map((pricing, index) =>
                <PricingCard key={index} description={pricing.description} delay={(index+1)*0.3} features={pricing.features} recommendation={pricing.recommendation} price={pricing.price}  />
                )}
            </div>
        </section>
    )
}
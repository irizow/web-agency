import styles from './pricing.module.css';
import doneIcon from '../../assets/images/Pricing/Done.svg';
import purpleLime from '../../assets/images/Pricing/purplelime.svg'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Pricing() {

    const pricingplans = [{
        description: 'landing page',
        features: ['1 custom-designed landing page', '1 year free domain + hosting', 'mobile responsive design', 'web maintenance', 'up to 5 edits per year'],
        recommendation: 'businesses that need a simple, sleek online presence',
        price: '$600',
    },
    {
        description: 'up to 3 pages',
        features: ['landing +  2 internal pages', '1 year free domain + hosting', 'mobile responsive design', 'web maintenance', 'up to 10 edits per year'],
        recommendation: 'businesses that  need more room to tell their story',
        price: '$800',
    },
    {
        description: '5+ pages',
        features: ['landing page + 5+ internal pages', '1 year free domain + hosting', 'mobile responsive design', 'web maintenance', 'up to 20 edits per year'],
        recommendation: 'businesses that need a more detailed site to display multiple content, products, or services',
        price: '$1500',
    },]

    function PricingCard({description, features, recommendation, price, delay}) {
        const [ref, inView] = useInView({threshold: 0.2, triggerOnce: true})
        return (
            <motion.div 
            ref={ref}
            initial={{opacity: 0, y: 100}}
            animate={inView && {opacity: 1, y: 0}}
            transition={{duration: 0.3, delay}}
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
                        <span><strong>ideal for: </strong></span>
                        <span>{recommendation}</span>
                    </div>
                </div>
                <div className={styles.pricediv}>
                    <p className={styles.price}>{price}</p>
                    <HashLink smooth to='#contact'>
                    <button>contact</button>
                    </HashLink>
                </div>
                
            </motion.div>
        )
    }

    return (
        <section className={styles.pricing}>
            <h2>pricing</h2>
            <div className={styles.pricingwrapper}>
                {pricingplans.map((pricing, index) =>
                <PricingCard key={index} description={pricing.description} delay={`0.${index*4}`} features={pricing.features} recommendation={pricing.recommendation} price={pricing.price}  />
                )}
            </div>
        </section>
    )
}
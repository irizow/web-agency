import styles from './services.module.css'
import maintenanceImg from '../../assets/images/Services/maintenance.svg';
import designImg from '../../assets/images/Services/design.svg';
import contentImg from '../../assets/images/Services/content.svg';
import brandingImg from '../../assets/images/Services/branding.svg';
import plusIcon from '../../assets/images/Services/addbutton.svg';
import minusIcon from '../../assets/images/Services/minusbutton.svg';
import { useState } from 'react';


export default function Services() {


    const services = [{
        title: 'web design & development',
        subtitle: 'we build websites that do more than just look good—they perform.',
        text1: 'we fuse creativity with strategy, creating custom sites that engage your visitors and turn them into loyal customers.',
        text2: 'all sites custom built using html, css, js and react.',
        img: designImg,
        id: 1,
    },
    {
        title: 'logo & branding ',
        subtitle: 'your brand’s identity should be as unique as the business you’ve built.',
        text1: 'we fuse creativity with strategy, creating custom sites that engage your visitors and turn them into loyal customers.',
        text2: 'all sites custom built using html, css, js and react.',
        img: brandingImg,
        id: 2,
    },
    {
        title: 'content creation',
        subtitle: 'captivating content is key to driving engagement and building your brand.',
        text1: 'we build websites that do more than just look good—they perform.',
        text2: 'we build websites that do more than just look good—they perform.',
        img: contentImg,
        id: 3,
    },
    {
        title: 'web maintenance',
        subtitle: 'your website is the face of your business, and it needs regular care to stay in top shape.',
        text1: 'we build websites that do more than just look good—they perform.',
        text2: 'we build websites that do more than just look good—they perform.',
        img: maintenanceImg,
        id: 4,
    },
]

    function ServicesCard({title, subtitle, text1, text2, img, id}) {
        const [isOpen, setIsOpen] = useState(false);

        const handleClick = ()=> {
            setIsOpen(!isOpen);
            console.log(isOpen)
        }

        return (
            <div  className={`${styles.servicescard}`} id={'box'+id}>
                <div>
                <img src={isOpen ? minusIcon : plusIcon} onClick={handleClick} className={styles.plusicon} alt='plus icon'></img>
                <h3>{title}</h3>
                <span>{subtitle}</span>
                {isOpen &&
                <div className={styles.cardtext}>
                    <p>{text1} </p>
                    <p>{text2}</p>
                </div>
                }
                
                </div>
           
                <img className={styles.cardimg} src={img}></img>
            </div>
        )
    }




    return (
    
        <section id='services' className={styles.services}>
           <h2>our services</h2>
           <div className={styles.servicesflex}>
           <div className={styles.servicesgrid}>
            <ServicesCard key={services[0].id} title={services[0].title} subtitle={services[0].subtitle} text1={services[0].text1} text2={services[0].text2} img={services[0].img} id={services[0].id} />
            <ServicesCard key={services[2].id} title={services[2].title} subtitle={services[2].subtitle} text1={services[2].text1} text2={services[2].text2} img={services[2].img} id={services[2].id}  />

            </div>
            <div className={styles.servicesgrid}>
           <ServicesCard key={services[1].id} title={services[1].title} subtitle={services[1].subtitle} text1={services[1].text1} text2={services[1].text2} img={services[1].img} id={services[1].id} />
            <ServicesCard key={services[3].id} title={services[3].title} subtitle={services[3].subtitle} text1={services[3].text1} text2={services[3].text2} img={services[3].img} id={services[3].id} />
            </div>
           </div>
           
        </section>

    )
}
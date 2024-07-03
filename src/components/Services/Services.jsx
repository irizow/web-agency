import styles from './services.module.css'
import Card from './Card'

export default function Services() {
    const title1 = "100% Custom Websites";
    const description1= "We create websites from Scratch so you every detail of it has the personality your business deserves";
    const title2 = "We don't use templates";
    const description2 = "We don't use Wordpress or any other page builder, ensuring your site is running at it's full speed and it's maintanable over time";
    const title3 = "Fully Responsive";
    const description3 = "We design every layout on laptop, tablet and mobile, making sure every device see the content of your site at it's maximum shine"
    return (
        <div className={styles.servicesdiv}>
            <Card title={title1} description={description1}/>
            <Card title={title2} description={description2}/>
            <Card title={title3} description={description3}/>
        </div>
    )
}
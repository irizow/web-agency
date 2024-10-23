import styles from './about.module.css'
import supportIcon from '../../assets/images/About/supporticon.svg';
import customIcon from '../../assets/images/About/customsolutionsicon.svg';
import fairIcon from '../../assets/images/About/fairicon.svg';

export default function About() {


    return (
        <section id='about' className={styles.about}>
            <div className={styles.aboutdiv}>
                <h2>our approach</h2>
                <div>
                    <div className={styles.aboutcard}>
                        <h3>custom solutions</h3>
                        <img src={customIcon} alt='custom solutions icon'></img>
                        <p>your website shouldn’t look like everyone else’s, just cause you're a small business. with original designs, we’ll bring your brand to life - no generic templates!</p>
                    </div>
                    <div className={styles.aboutcard}>
                        <h3>fair & fresh</h3>
                        <img src={fairIcon} alt='fair and fresh icon'></img>
                        <p>you don’t have to spend a fortune to get a kickass website. we offer creative, 
                        high-quality solutions at a 
                        price that makes sense for
                        small businesses. </p>
                    </div>
                    <div className={styles.aboutcard}>
                        <h3>ongoing support</h3>
                        <img src={supportIcon} alt='Ongoing support icon'></img>
                        <p>once your site is live, 
                        we don’t disappear. we provide support if you need it and make sure 
                        your website continues 
                        to grow with you.</p>
                    </div>
                </div>
            </div>

        </section>

    )
}
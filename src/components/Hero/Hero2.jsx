import styles from './hero2.module.css'


export default function Hero2() {
 
 
    return (
        <section className={styles.herodesktop} id='home'>
            <div className={styles.titlecontainer}>
                <div className={styles.marblecontainer}></div>
                
                <h2>BUILT BY</h2>
                <div className={styles.meshcontainer}></div>
                <div className={styles.limecontainer}>
                    <h1>LIME</h1>
                    <div className={styles.sakuracontainer}></div>
                </div>
                
                <h3>&lt;A CREATIVE AGENCY FOR SMALL BUSSINESSES/&gt;</h3>
            </div>
          
        </section>
    )
}
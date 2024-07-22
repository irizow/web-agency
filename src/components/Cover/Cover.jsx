import styles from './cover.module.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import parrotLogo from '../../assets/images/parrotcircularDM.png'


export default function Cover({setIsLoading}) {

  const navigate = useNavigate();

    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const words = ["WE",  " CREATE", " IOO% ", " CUSTOM-", "CODED", " WEBSITES", " TO", " MAKE", " YOU", " STAND OUT"]
     useEffect(() => {
        const timeoutId = setTimeout(() => {
          navigate('/home');
        }, 7000);
    
        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
      }, [navigate]);

      useEffect(() => {
        const percentageId = setTimeout(() => {
          setText(prevText => index+1 > words.length ? "" : prevText + words[index]);
          setIndex(prevIndex => prevIndex +1)
        }, 300);
    
        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(percentageId);
      }, [text]);


    return (
        <div className={styles.cover}>
                <img onClick={()=>{navigate('/home')}} src={parrotLogo} alt="logo of parrot webs, shows a parrot with a hat and the name of the site"></img>
                {words.map((word, index) => {
                    return (
                    <p key={index} className={`${styles.texts} ${styles[`text${index}`]}`}>{word}</p>
                    )
                })}
                
        </div>
        
    )
}
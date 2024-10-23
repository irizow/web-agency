import styles from './squiggle.module.css'
import { useRef, useEffect } from 'react';

export default function Squiggle() {
    const svg = useRef();
    const path = useRef();


    const scroll = ()=> {
        if (path.current) { 
            const distance = window.scrollY;
            const totalDistance = document.body.clientHeight;
            const percentage = distance / totalDistance;
            const pathLength = path.current.getTotalLength();
            path.current.style.strokeDasharray = pathLength; 
            path.current.style.strokeDashoffset = `${pathLength * (1.1 - percentage)}`
        }
    }

    useEffect(()=> {
        scroll();
        window.addEventListener('scroll', scroll);

        return () => {
            window.removeEventListener('scroll', scroll)
        }
    }, [])

  return (
    <svg ref={svg} className={styles.squiggle} width="1322" height="4336" viewBox="0 0 1322 4336" fill="none" xmlns="http://www.w3.org/2000/svg">
<path ref={path} d="M1054.5 6C1278.74 118.145 1321.74 229.324 1313 477.5H47V1207.5H429H866.5V1625.5H47V1861.5H131V1934.5V2692.5H7.5V2790.5H131V3091H639.5H1063V3425H639.5V3489.5M639.5 3489.5H131V4328.5H1156V3489.5H639.5Z" stroke="url(#paint0_linear_1602_927)" stroke-width="15"/>
<defs>
<linearGradient id="paint0_linear_1602_927" x1="660.77" y1="6" x2="660.77" y2="4328.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#AF36FF"/>
<stop offset="0.1" stop-color="#733CCC"/>
<stop offset="0.25" stop-color="#50FF40"/>
<stop offset="0.35" stop-color="#AC55FF"/>
<stop offset="0.5" stop-color="#AF36FF"/>
<stop offset="0.75" stop-color="#50FF40"/>
<stop offset="1" stop-color="#AF36FF"/>
</linearGradient>
</defs>
</svg>)
}
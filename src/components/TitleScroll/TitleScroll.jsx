import styles from './titlescroll.module.css'
import { useState, useEffect, useRef } from 'react'

export default function TitleScroll({name}) {
    const [scrollWidth, setScrollWidth] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            const updateWidth = () => {
                const contentWidth = container.scrollWidth;
                setScrollWidth(contentWidth);
            };
            updateWidth();
    
            const observer = new ResizeObserver(updateWidth);
            observer.observe(container);
    
            return () => observer.disconnect(); 
        }
    }, [name]);
    return (
        <div className={styles.titlescroll}>
            <div className={styles.projectstitle} 
            ref={containerRef}
            style={{'--scroll-width' : `${scrollWidth}px`}}>
                <h2>{name}</h2>
                <span>·</span>
                <h2>{name}</h2>
                <span>·</span>
                <h2>{name}</h2>
                <span>·</span>
                <h2>{name}</h2>
                <span>·</span>
                <h2>{name}</h2>
                <span>·</span>
            </div>
            <div className={styles.projectstitle}
            style={{'--scroll-width' : `${scrollWidth}px`}}>
                <h2>{name}</h2>
                <span>·</span>
                <h2>{name}</h2>
                <span>·</span>
                <h2>{name}</h2>
                <span>·</span>
                <h2>{name}</h2>
                <span>·</span>
                <h2>{name}</h2>
                <span>·</span>
            </div>
        </div>
    )
}
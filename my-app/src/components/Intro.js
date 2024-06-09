import beginner from '../assets/images/beginner.png';
import intermediate from "../assets/images/intermediate.png"
import advanced from "../assets/images/advanced.png"
import styles from "../Styles/intro.module.css";

import {useEffect, useRef} from "react";
import {animateOnScroll} from "../animation /Animation";
// import animateOnScroll from "../animation/Animation";

function Intro(){

    const itemContainerRef1 = useRef(null);
    const itemContainerRef2 = useRef(null);
    const itemContainerRef3 = useRef(null);

    useEffect(() => {
        // const elements = document.querySelectorAll(`.${styles.itemContainer}`);
        animateOnScroll([itemContainerRef1.current,itemContainerRef2.current,itemContainerRef3.current], styles.animate);
    }, []);

    return (
        <div className={styles.container}>
            <div ref={itemContainerRef1} className={styles.itemContainer}>
                <img src={beginner} alt="beginner" className={styles.roundImage}/>
                <h2>Beginner</h2>
                <p className={styles.text}>
                    Our beginner program is designed to help you learn the basics of skating.
                </p>
            </div>

            <div ref={itemContainerRef2} className={styles.itemContainer}>
                <img src={intermediate} alt="beginner" className={styles.roundImage}/>
                <h2>Intermediate</h2>
                <p className={styles.text}>
                    Our beginner program is designed to help you learn the basics of skating.
                </p>
            </div>

            <div ref={itemContainerRef3} className={styles.itemContainer}>
                <img src={advanced} alt="beginner" className={styles.roundImage}/>
                <h2>Advanced</h2>
                <p className={styles.text}>
                    Our beginner program is designed to help you learn the basics of skating.
                </p>
            </div>
        </div>
    )
}

export default Intro;
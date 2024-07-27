import styles from "../Styles/intro.module.css";

import {useEffect, useRef} from "react";
import {animateOnScroll} from "../animation /Animation";
import { PiCertificate, PiFirstAidKit} from "react-icons/pi";
import { GiRollerSkate } from "react-icons/gi";

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
                <div className={styles.icon}>
                    <PiCertificate/>
                </div>
                <p className={styles.iconText}>
                    Certified Coaches
                </p>
                <p className={styles.text}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                </p>
            </div>

            <div ref={itemContainerRef2} className={styles.itemContainer}>
                <div className={styles.icon}>
                    <PiFirstAidKit/>
                </div>
                <p className={styles.iconText}>
                    First-Aid Accredited
                </p>
                <p className={styles.text}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                </p>
            </div>

            <div ref={itemContainerRef3} className={styles.itemContainer}>
                <div className={styles.icon}>
                    <GiRollerSkate/>
                </div>
                {/*<img src={advanced} alt="beginner" className={styles.roundImage}/>*/}
                <p className={styles.iconText}>
                    Professional Programs
                </p>
                <p className={styles.text}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                </p>
            </div>
        </div>
    )
}

export default Intro;
import styles from "../Styles/quote.module.css"
import {useEffect, useRef} from "react";
import {animateOnScroll} from "../animation /Animation";

function Quote (props){

    const quoteContainerRef = useRef(null);
    useEffect(() => {
        console.log(quoteContainerRef.current);
        // const elements = document.querySelectorAll(`.${styles.itemContainer}`);
        animateOnScroll([quoteContainerRef.current], styles.animate);
    }, []);
    return (
        <>
            <div className={styles.quoteContainer}>
                <h1 ref={quoteContainerRef} className={styles.quote}>{props.quote}</h1>
            </div>
        </>
    );
}

export default Quote
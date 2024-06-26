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
            <div ref={quoteContainerRef} className={styles.quoteContainer}>
                <p className={styles.quote}>{props.quote}</p>
            </div>
        </>
    );
}

export default Quote
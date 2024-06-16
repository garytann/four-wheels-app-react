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
                <img className={styles.quoteImg} alt="quoteImg" src={props.quoteImg}/>
                <div ref={quoteContainerRef} className={styles.textContainer}>
                    <p className={styles.quote}>{props.quoteText}</p>
                    <p className={styles.author}>{props.quoteAuthor}</p>
                </div>
            </div>
        </>
    );
}

export default Quote
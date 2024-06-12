import styles from "../Styles/quote.module.css"

function Quote (props){
    return (
        <>
            <div className={styles.quoteContainer}>
                <img className={styles.quoteImg} alt="quoteImg" src={props.quoteImg}/>
                <div className={styles.textContainer}>
                    <p className={styles.quote}>{props.quoteText}</p>
                    <p className={styles.author}>{props.quoteAuthor}</p>
                </div>
            </div>
        </>
    );
}

export default Quote
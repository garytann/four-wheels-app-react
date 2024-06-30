import styles from "../Styles/pricing.module.css";
import { FaCircleCheck } from "react-icons/fa6";


function Pricing (){
    return(
        <>
            <div className={styles.container}>

                <div className={styles.textContainer}>
                    <h2 className={styles.headers}>
                        Our Pricing
                    </h2>
                    <p className={styles.desc}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    </p>
                </div>

                <div className={styles.priceContainer}>

                    <div className={styles.priceBox}>
                        <div className={styles.priceText}>
                            <h3 className={styles.priceHeader}>GROUP LESSON</h3>
                            <h2 className={styles.price}>$100</h2>
                            <p className={styles.priceDesc}>Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                                the</p>
                            <div className={styles.priceDetails}>
                                <div className={styles.details}>
                                    <FaCircleCheck color="#B8B42D" size={20}/>
                                    <p>4 sessions</p>
                                </div>
                                <div className={styles.details}>
                                    <FaCircleCheck color="#B8B42D" size={20}/>
                                    <p>1 hour session</p>
                                </div>
                                <div className={styles.details}>
                                    <FaCircleCheck color="#B8B42D" size={20}/>
                                    <p>Joined Group Class</p>
                                </div>
                                <div className={styles.details}>
                                    <FaCircleCheck color="#B8B42D" size={20}/>
                                    <p>Max 5 students</p>
                                </div>
                                <div className={styles.details}>
                                    <FaCircleCheck color="#B8B42D" size={20}/>
                                    <p>Skate Equipment Provided</p>
                                </div>
                                <div className={styles.details}>
                                    <FaCircleCheck color="#B8B42D" size={20}/>
                                    <p>Professional Instructor</p>
                                </div>
                            </div>
                            <button className={styles.priceBtn}>
                                <a href="/bookings">Book Now</a>
                            </button>
                        </div>
                    </div>

                    <div className={styles.priceBox}>
                        <div className={styles.priceText}>
                            <h3 className={styles.priceHeader}>PRIVATE LESSON</h3>
                            <div className={styles.ptePriceGroup}>
                                <p className={styles.fromText}>From</p>
                                <h2 className={styles.price}>$120</h2>
                            </div>
                            <p className={styles.priceDesc}>Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                                the</p>
                            <div className={styles.priceDetails}>
                                <div className={styles.details}>
                                    <FaCircleCheck color="#B8B42D" size={20}/>
                                    <p>4 sessions</p>
                                </div>
                                <div className={styles.details}>
                                    <FaCircleCheck color="#B8B42D" size={20}/>
                                    <p>1 hour session</p>
                                </div>
                                <div className={styles.details}>
                                    <FaCircleCheck color="#B8B42D" size={20}/>
                                    <p>1-to-1 Personalised Coaching</p>
                                </div>
                                <div className={styles.details}>
                                    <FaCircleCheck color="#B8B42D" size={20}/>
                                    <p>Curated & Convenience</p>
                                </div>
                                <div className={styles.details}>
                                    <FaCircleCheck color="#B8B42D" size={20}/>
                                    <p>Skate Equipment Provided</p>
                                </div>
                                <div className={styles.details}>
                                    <FaCircleCheck color="#B8B42D" size={20}/>
                                    <p>Professional Instructor</p>
                                </div>
                            </div>
                            <button className={styles.priceBtn}>
                                <a href="/bookings">Book Now</a>
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Pricing;
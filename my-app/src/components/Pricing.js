import styles from "../Styles/pricing.module.css";
import { FaCircleCheck } from "react-icons/fa6";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import useMediaQuery from '@mui/material/useMediaQuery';
import {Link} from "react-router-dom";


function Pricing (){

    const isMobile = useMediaQuery('@media (max-width:768px)');

    const BootstrapButton = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        display: 'inline-block',
        minHeight: 0,
        minWidth: 0,
        color:'#EAEAEA',
        fontSize: isMobile ? '1rem' : '1.2rem', // Reduce the font size on mobile
        padding: isMobile ? '1rem 1rem' : '1rem 2rem', // Reduce the padding on mobile
        border: '1px solid',
        borderRadius:'20px',
        textAlign: 'center',
        lineHeight: 1.5,
        backgroundColor: '#494b4b',
        borderColor: '#494b4b',
        '&:hover': {
            backgroundColor: '#B8B42D',
            borderColor: '#B8B42D',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#B8B42D',
            borderColor: '#B8B42D',
        },
    });
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
                            <BootstrapButton variant="contained" component={Link} to="/bookings">
                                Book Now
                            </BootstrapButton>
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
                            <BootstrapButton variant="contained" component={Link} to="/bookings">
                                Book Now
                            </BootstrapButton>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Pricing;
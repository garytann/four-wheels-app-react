import styles from '../Styles/aboutpage.module.css';
import React from "react";
import headCoachImg from "../assets/images/head_coach.jpg"

function About (){
    return (
        <div className={styles.container}>
            <h1 className={styles.headers}>About Us</h1>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>Skating as a passion</h2>
                <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
            </div>

            <div className={styles.coachContainer}>
                <h2 className={styles.title}>Our Coaches</h2>
                <div className={styles.textContainer}>
                    <img src={headCoachImg} alt="headCoachImg"/>
                    <h2 className={styles.text}>Head Coach</h2>
                    <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                </div>
            </div>
        </div>
    )
}

export default About;
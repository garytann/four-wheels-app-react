import about from "../assets/images/about.png";
import styles from "../Styles/about.module.css"

function About() {
  return (
    <div className={styles.aboutContainer}>
        <div className={styles.itemContainer}>
            <div className={styles.headers}>
                <p className={styles.aboutText}>About Us</p>
                <h2 className={styles.title}>
                    Individual & Group Coaching
                </h2>
            </div>
            <p className={styles.text}>
                We offer individual and group coaching for all ages and levels. Our experienced coaches will help you to improve your skills and reach your goals.
                We want our students to feel awesome and unique but at the same time, safe while learning!
            </p>

            <div className={styles.buttons}>
                <button className={styles.button}>
                    Lessons & Programs
                </button>
                <button className={styles.button}>
                    Our coaches
                </button>
            </div>
        </div>
        <img className={styles.image} src={about} alt="About Us"/>
    </div>
  );
}

export default About;
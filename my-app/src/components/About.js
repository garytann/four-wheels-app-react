import about from "../assets/images/about.png";
import styles from "../Styles/about.module.css"

function About() {
  return (
    <div className={styles.aboutContainer}>
        <div className={styles.itemContainer}>
            <div className={styles.headers}>
                <h3>About Us</h3>
                <h2>
                    Why <span className="highlight">Learn</span> How to Skate With Us?
                </h2>
            </div>
            <p className={styles.text}>
                We want our students to feel awesome and unique but at the same time, safe!
            </p>
        </div>
        <img className={styles.image} src={about} alt="About Us"/>
    </div>
  );
}

export default About;
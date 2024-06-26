import styles from "../Styles/hero.module.css";

function Hero() {
  return (
      <div className={styles.heroContainer}>
          <div>
              <div className={styles.textContainer}>
                  <span>SKATE</span>
                  <span>WITH</span>
                  <span>US</span>
              </div>
          </div>
          <button className={styles.startButton}>
              SKATES UP
          </button>
      </div>
  );
}

export default Hero;
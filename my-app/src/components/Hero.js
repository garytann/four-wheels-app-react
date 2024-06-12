import styles from "../Styles/hero.module.css";

function Hero() {
  return (
      <div className={styles.imgContainer}>
          <div className={styles.textContainer}>
              <h1 className={styles.title}>
                  SKATE WITH US
              </h1>
              <button className={styles.startButton}>
                  LETS SKATE
              </button>
          </div>
          <p className={styles.btmText}>sports, skates & co</p>
      </div>
  );
}

export default Hero;
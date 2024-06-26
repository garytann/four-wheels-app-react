import styles from "../Styles/about.module.css"
import groupImg from "../assets/images/group.jpg"
import privateImg from "../assets/images/private.jpg"
import freestyleImg from "../assets/images/freestyle.jpg"
import {Link} from "react-router-dom";

function About() {
  return (
      <>
          <div className={styles.container}>
              <div className={styles.aboutContainer}>
                  <h2 className={styles.aboutHeader}>WHO ARE WE</h2>
                  <div className={styles.text}>
                      <p className={styles.aboutTitle}>
                          We can teach you how to skate, roll and slide!
                      </p>

                      <p className={styles.aboutText}>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                      </p>
                  </div>

                  <button className={styles.aboutButton}>
                      <Link to="/about">Learn More</Link>
                  </button>
              </div>

              <div className={styles.programContainer}>
                  <h2 className={styles.programHeader}>OUR PROGRAMS</h2>
                  <div>
                      <div className={styles.programItems}>
                          <div className={styles.imageContainer}>
                              <img src={groupImg} alt="GroupImage"/>
                              <div className={styles.imageItems}>
                                  <h3>GROUP LESSON</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  <button className={styles.imageButton}>
                                      <Link to="/bookings">Book Now</Link>
                                  </button>
                              </div>
                          </div>
                          <div className={styles.imageContainer}>
                              <img src={privateImg} alt="GroupImage"/>
                              <div className={styles.imageItems}>
                                  <h3>PRIVATE LESSON</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  <button className={styles.imageButton}>
                                      <Link to="/bookings">Book Now</Link>
                                  </button>
                              </div>
                          </div>
                          <div className={styles.imageContainer}>
                              <img src={freestyleImg} alt="GroupImage"/>
                              <div className={styles.imageItems}>
                                  <h3>FREESTYLE LESSON</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  <button className={styles.imageButton}>
                                      <Link to="/bookings">Book Now</Link>
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
      // <div className={styles.aboutContainer}>
      //     <div className={styles.itemContainer}>
      //         <div className={styles.headers}>
      //             <p className={styles.aboutText}>About Us</p>
      //             <h2 className={styles.title}>
      //                 Individual & Group Coaching
      //             </h2>
      //         </div>
      //         <p className={styles.text}>
      //             We offer individual and group coaching for all ages and levels. Our experienced coaches will help you to improve your skills and reach your goals.
    //             We want our students to feel awesome and unique but at the same time, safe while learning!
    //         </p>
    //
    //         <div className={styles.buttons}>
    //             <button className={styles.button}>
    //                 Lessons & Programs
    //             </button>
    //             <button className={styles.button}>
    //                 Our coaches
    //             </button>
    //         </div>
    //     </div>
    //     <img className={styles.image} src={about} alt="About Us"/>
    // </div>
  );
}

export default About;
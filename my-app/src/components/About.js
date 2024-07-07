import styles from "../Styles/about.module.css"
import groupImg from "../assets/images/group.jpg"
import privateImg from "../assets/images/private.jpg"
import freestyleImg from "../assets/images/freestyle.jpg"
import {Link} from "react-router-dom";

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function About() {

    const isMobile = useMediaQuery('@media (max-width:768px)');

    const BootstrapButton = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        color:'#494b4b',
        fontSize: isMobile ? '1rem' : '1.2rem', // Reduce the font size on mobile
        padding: isMobile ? '1rem 1rem' : '1rem 2rem', // Reduce the padding on mobile
        border: '1px solid',
        borderRadius:'20px',
        lineHeight: 1.5,
        backgroundColor: '#EAEAEA',
        borderColor: '#EAEAEA',
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

                  <BootstrapButton variant="contained" component={Link} to="/about">
                      Learn More
                  </BootstrapButton>
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
                                  <BootstrapButton className={styles.imageButton} variant="contained" component={Link} to="/bookings">
                                      Book Now
                                  </BootstrapButton>
                              </div>
                          </div>
                          <div className={styles.imageContainer}>
                              <img src={privateImg} alt="GroupImage"/>
                              <div className={styles.imageItems}>
                                  <h3>PRIVATE LESSON</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  <BootstrapButton className={styles.imageButton} variant="contained" component={Link} to="/bookings">
                                      Book Now
                                  </BootstrapButton>
                              </div>
                          </div>
                          <div className={styles.imageContainer}>
                              <img src={freestyleImg} alt="GroupImage"/>
                              <div className={styles.imageItems}>
                                  <h3>FREESTYLE LESSON</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  <BootstrapButton className={styles.imageButton} variant="contained" component={Link} to="/bookings">
                                      Book Now
                                  </BootstrapButton>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}

export default About;
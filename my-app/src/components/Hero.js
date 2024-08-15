import styles from "../Styles/hero.module.css";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { keyframes } from '@mui/system';
import {Link} from "react-router-dom";


function Hero() {

    const swipeUp = keyframes`
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        `;

    // const isMobile = useMediaQuery('@media (min-width:600px)');
    const isMobile = useMediaQuery('@media (max-width:600px)');
    const isTablet = useMediaQuery('@media (min-width:768px) and (max-width:1199px)');

    const BootstrapButton = styled(Button)({
        animation: `${swipeUp} 1s ease-in-out`,
        boxShadow: 'none',
        textTransform: 'none',
        color:'#EAEAEA',
        fontSize: isMobile ? '1em' : isTablet ? '1rem' : '1.2rem',
        padding: isMobile ? '1rem 2rem' : isTablet ? '1rem 2rem' : '1rem 2rem',
        // fontSize: isMobile ? '1.5rem' : '2rem', // Reduce the font size on mobile
        // padding: isMobile ? '1rem 1rem' : '1rem 2rem', // Reduce the padding on mobile
        border: '1px solid',
        borderRadius:'20px',
        lineHeight: 1.5,
        backgroundColor: '#32373B',
        borderColor: '#494b4b',
        fontFamily: [
            'Poppins',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#B8B42D',
            borderColor: '#B8B42D',
            boxShadow: 'none',
        },
    });

  return (
      <div className={styles.heroContainer}>
          <div>
              <div className={styles.textContainer}>
                  <span>SKATE</span>
                  <span>WITH</span>
                  <span>US.</span>
              </div>
          </div>
          <BootstrapButton variant="contained" component={Link} to="/bookings">
              Get Started
          </BootstrapButton>
      </div>
  );
}

export default Hero;
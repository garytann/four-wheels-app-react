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
    const isMobile = useMediaQuery('@media (max-width:768px)');

    const BootstrapButton = styled(Button)({
        animation: `${swipeUp} 1s ease-in-out`,
        boxShadow: 'none',
        textTransform: 'none',
        color:'#EAEAEA',
        fontSize: isMobile ? '1.5rem' : '3rem', // Reduce the font size on mobile
        padding: isMobile ? '1rem 1rem' : '1rem 2rem', // Reduce the padding on mobile
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
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#B8B42D',
            borderColor: '#B8B42D',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    });

  return (
      <div className={styles.heroContainer}>
          <div>
              <div className={styles.textContainer}>
                  <span>SKATE</span>
                  <span>WITH</span>
                  <span>US</span>
              </div>
          </div>
          <BootstrapButton variant="contained">
              <Link to="/bookings">SKATES UP</Link>
          </BootstrapButton>
      </div>
  );
}

export default Hero;
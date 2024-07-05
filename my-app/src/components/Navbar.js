import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useRef} from "react";
import styles from "../Styles/navbar.module.css"
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

const StickyAppBar = styled(AppBar)({
    position: 'sticky', // or 'fixed' if you want it to never move from the top
    top: 0, // Ensures it sticks to the top of the viewport
    zIndex: 1100, // The AppBar component uses a default z-index of 1100, ensure it's on top of other content
});
function Navbar() {

    const navRef = useRef()

    const showNavBar = () => {
        navRef.current.classList.toggle(styles.responsive_nav);
    }

  return (
    <header>
        <h1>
            <Link to="/">Logo</Link>
        </h1>
        <nav ref={navRef}>
            <Link to="/about" onClick={showNavBar}>About</Link>
            <Link to="/lessons" onClick={showNavBar}>Lessons</Link>
            <Link to="/#" onClick={showNavBar}>Contact</Link>
            <Link to="/bookings" onClick={showNavBar}>Bookings</Link>

            <button className={`${styles.navBtn} ${styles.navCloseBtn}`} onClick={showNavBar}>
                <FaTimes/>
            </button>
        </nav>
        <button className={styles.navBtn} onClick={showNavBar}>
            <FaBars/>
        </button>
    </header>
  );
}

export default Navbar;
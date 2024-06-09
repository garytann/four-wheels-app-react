import {FaBars, FaTimes} from "react-icons/fa";
import {useRef} from "react";
import styles from "../Styles/navbar.module.css"
function Navbar() {

    const navRef = useRef()

    const showNavBar = () => {
        navRef.current.classList.toggle(styles.responsive_nav);
    }

  return (

    <header>
        <h1>Logo</h1>
        <nav ref={navRef}>
            <a href="/#">About</a>
            <a href="/#">Lessons</a>
            <a href="/#">Contact</a>
            <a href="/#">Bookings</a>

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
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useRef} from "react";
import styles from "../Styles/navbar.module.css"

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
            {/*<Link to="/#" onClick={showNavBar}>Contact</Link>*/}
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
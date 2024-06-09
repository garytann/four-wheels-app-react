import {FaBars, FaTimes} from "react-icons/fa";
import {useRef} from "react";
import "../Styles/navbar.css";
function Navbar() {

    const navRef = useRef()

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

  return (

    <header>
        <h1>Logo</h1>
        <nav ref={navRef}>
            <a href="/#">About</a>
            <a href="/#">Lessons</a>
            <a href="/#">Contact</a>
            <a href="/#">Bookings</a>

            <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                <FaTimes/>
            </button>
        </nav>
        <button className="nav-btn" onClick={showNavBar}>
            <FaBars/>
        </button>
    </header>
  );
}

export default Navbar;
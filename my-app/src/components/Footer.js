import styles from '../Styles/footer.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLinks}>
                <Link to="/about">About</Link>
                <Link to="/lessons">Lessons</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/bookings">Bookings</Link>
            </div>
            <div className={styles.logo}>
                {/* Replace with your logo */}
                <h1>Logo</h1>
            </div>
            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} FourWheels Sports
            </div>
        </footer>
    );
};

export default Footer;
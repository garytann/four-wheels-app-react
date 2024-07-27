import styles from '../Styles/footer.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLinks}>
                <Link to="/about">About</Link>
                <Link to="/lessons">Lessons</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/bookings">Bookings</Link>
            </div>
            <div className={styles.socialMediaLinks}>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                    <FaTwitter/>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                    <FaFacebook/>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                    <FaInstagram/>
                </a>
            </div>
            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} FourWheels Sports
            </div>
        </footer>
    );
};

export default Footer;
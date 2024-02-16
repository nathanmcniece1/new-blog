'use client'
import { useState, useEffect } from 'react';
import styles from "./Header.module.css";
import Link from "next/link";

function Header() {
  // State to handle the visibility of the hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set isMobileView to true if window width is less than 600px
      if (window.innerWidth < 700) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
        setIsMenuOpen(false); // Reset menu state when resizing to wider view
      }
    }
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.brand}>
          <h1 className={styles.bebas}><Link href="/">MUSASHI</Link></h1>
        </div>

        {isMobileView ? (
          <div className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {/* Icon for hamburger menu (could be an SVG or a styled div) */}
            <div className={styles.hamburgerIcon}>
                <div></div>
                <div></div>
            </div>
          </div>
        ) : (
          <div className={styles.navLinks}>
            <h2 className={`${styles.navLink} ${styles.roboto}`}><Link href="/">Writing</Link></h2>
            <h2 className={`${styles.navLink} ${styles.roboto}`}><Link href="/about">About</Link></h2>
            <h2 className={`${styles.navLink} ${styles.roboto}`}><Link href="/about">Projects</Link></h2>
          </div>
        )}

        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <h2 className={`${styles.navLink} ${styles.roboto}`}>Writing</h2>
            <h2 className={`${styles.navLink} ${styles.roboto}`}><Link href="/about">About</Link></h2>
            <h2 className={`${styles.navLink} ${styles.roboto}`}>Projects</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;

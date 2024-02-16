import Header from "../components/Header";
import styles from "./About.module.css";
import Image from "next/image";

function About() {
    return (
        <>
            <Header />
            <div className={styles.outerContainer}>
                <div className={styles.container}>
                    <p className={styles.roboto}>
                        My name is Musashi, and I’m interested in the prospect of, among other things, building a more open and equitable Internet, and expanding the horizon of human potential. Here’s my home on the Web.
                    </p>
                    <div className={styles.imageContainer}>
                        {/* Twitter link */}
                        <a href="https://twitter.com/cypheronin" target="_blank" rel="noopener noreferrer" className={styles.specialLink}>
                            <p className={`${styles.roboto} ${styles.text}`}>X</p>
                        </a>
                        <p className={`${styles.roboto} ${styles.text}`}>/</p>
                        {/* Warpcast link */}
                        <a href="https://warpcast.com/musashi" target="_blank" rel="noopener noreferrer" className={styles.specialLink}>
                            <p className={`${styles.roboto} ${styles.text}`}>Farcaster</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;

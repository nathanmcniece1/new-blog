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
                        <a href="https://twitter.com/cypheronin" target="_blank" rel="noopener noreferrer">
                            <Image
                                className={styles.xLogo}
                                src="/twitter.png"
                                alt="Twitter Logo"
                                width={35}
                                height={35}
                            />
                        </a>
                        {/* Warpcast link */}
                        <a href="https://warpcast.com/musashi" target="_blank" rel="noopener noreferrer">
                            <Image
                                className={styles.xLogo}
                                src="/warpcast.png"
                                alt="Warpcast Logo"
                                width={35}
                                height={35}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;

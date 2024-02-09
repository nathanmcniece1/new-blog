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
                    {/* Use a regular <a> tag for external links */}
                    <a href="https://twitter.com/cypheronin" target="_blank" rel="noopener noreferrer">
                        <div>
                            <Image
                                className={styles.xLogo}
                                src="/twitter.png"
                                alt="Twitter Logo"
                                width={35}
                                height={35}
                            />
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}

export default About;

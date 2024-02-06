import Header from '../components/Header';
import styles from './About.module.css'

function About() {
    return (
        <>
        <Header />
        <div className={styles.container}>
            <p>
                Hello I'm a ronin.
            </p>
        </div>
        </>
    )
}

export default About;
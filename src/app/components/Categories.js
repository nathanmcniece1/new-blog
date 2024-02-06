import styles from './Categories.module.css'
import Link from 'next/link';

function Categories(){
    return (
        <>
        <div className={styles.outerContainer}>
            <div className={`${styles.frame} ${styles.roboto}`}>
                <p className={styles.text}><Link href="/">All</Link></p>
                <p className={styles.dot}> &#x2022;</p>
                <p className={styles.text}><Link href="/crypto">Crypto</Link></p>
                <p className={styles.dot}> &#x2022;</p>
                <p className={styles.text}><Link href="/crypto">Philosophy</Link></p>
                <p className={styles.dot}> &#x2022;</p>
                <p className={styles.text}><Link href="/crypto">Biology</Link></p>
                <p className={styles.dot}> &#x2022;</p>
                <p className={styles.text}><Link href="/crypto">Misc</Link></p>
            </div>
        </div>
        </>
    )
}

export default Categories;
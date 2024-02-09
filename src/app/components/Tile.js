import styles from './Tile.module.css'


function Tile() {

    
    return (
        <>
        <div className={styles.tileContainer}>
            <div className={`${styles.content} ${styles.roboto}`}>
                <h2 className={`${styles.title} ${styles.roboto}`}>Blockchains as Institutions for the Digital Age</h2>
                <p className={styles.body}>The most popular mental model for blockchains today is that of a shared computing platform. As computing platforms, shared computing platform, as computing platforms...</p>
                <div className={styles.bottomContent}>
                    <p className={styles.date}>01.04.13</p>
                    <p>READ</p>
                </div>
            </div>
        <div>
        </div>
        </div>
        </>
    )
}

export default Tile;